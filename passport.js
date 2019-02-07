const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ExtractJwt, Strategy: JWTStrategy} = require('passport-jwt');
const {Strategy: LocalStrategy} = require('passport-local');

const { SECRET } = require('./config');

const { Entrepreneur, Advisor, Investor } = require('./schema/Users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqtoCallback: true
}, async (req, email, password, callback) => {
    try {
        let user = {};
        switch (req.body.type) {
            case "entrepreneur":
                user = await Entrepreneur.findOne({email});
                break;
            case "advisor":
                user = await Advisor.findOne({email});
                break;
            case "investor":
                user = await  Investor.findOne({email});
                break;
        }
        if(Object.keys(user).length === 0){
            return callback(null, false);
        }
        else {
            const authenticated = await bcrypt.compare(req.body.password, user.password);
            if(authenticated){
                delete user.password;
                callback(null, {...user._doc, type: req.body.type});
            } else {
                return callback(null, authenticated);
            }
        }
    } catch(e){
        return callback(e, false);
    }
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}, (jwtPayload, callback) => {
    switch(jwtPayload.type){
        case "entrepreneur":
            return Entrepreneur.findById(jwtPayload._id).select('-password').exec((err, doc) => callback(err, {...doc._doc, type: 'entrepreneur'}));
        case "advisor":
            return Advisor.findById(jwtPayload._id).select('-password').exec((err, doc) => callback(err, {...doc._doc, type: 'advisor'}));
        case "investor":
            return Investor.findById(jwtPayload._id).select('-password').exec((err, doc) => callback(err, {...doc._doc, type: 'investor'}));
        default:
            return callback({message: 'No user type found.'}, null);
    }
}));