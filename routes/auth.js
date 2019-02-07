const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { SECRET  } = require("../config");

const validateLoginInput = require("../validation/login");

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
