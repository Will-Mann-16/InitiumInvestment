const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET  } = require("../config");

const { User } = require("../schema/Users");

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

router.post("/login", (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    passport.authenticate('local', { session: false }, (err, user) => {
        if(err){
            return res.status(500).json(err);
        }
        if(!user){
            return res.status(400).json({ success: false });
        }
        req.login(user, { session: false }, (err) => {
            if(err){
                return res.status(500).json(err);
            }
            jwt.sign({_id: user._id, type: user.type}, SECRET, {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    return res.status(200).json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
        });
    })(req, res);
});



router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({email: "Email already exists"});
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            tier: req.body.tier,
            type: req.body.type
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.status(200).json(user))
                    .catch(err => res.status(500).json(err));
            });
        });
    });
});

