const passport = require('server/passport');
const bcrypt = require('bcryptjs');
const {ExtractJwt, Strategy: JWTStrategy} = require('passport-jwt');
const {Strategy: LocalStrategy} = require('passport-local');

const { SECRET } = require('./config');

const { User } = require('./schema/Users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqtoCallback: true
}, async (req, email, password, callback) => {
    try {
        let user = await User.findOne({email, type: req.body.type});
        if(Object.keys(user).length === 0){
            return callback(null, false);
        }
        else {
            const authenticated = await bcrypt.compare(password, user.password);
            if(authenticated){
                delete user.password;
                callback(null, user);
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
}, (jwtPayload, callback) => User.findById(jwtPayload._id).select('-password').exec(callback)));