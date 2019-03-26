const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ExtractJwt, Strategy: JWTStrategy} = require('passport-jwt');
const {Strategy: LocalStrategy} = require('passport-local');

const { SECRET } = require('./config');

const { User } = require('./schema/Users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, callback) => {
    User.findOne({email, type: req.body.type}, (err, user) => {
        if(user === null){
            return callback(null, false);
        }
        else {
            bcrypt.compare(password, user.password, (err, authenticated) => {
                if(!authenticated){
                    return callback(null, authenticated);
                }
                delete user.password;
                return callback(null, user);
            });
        }
    });
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}, (jwtPayload, callback) => User.findById(jwtPayload._id).select('-password').exec(callback)));