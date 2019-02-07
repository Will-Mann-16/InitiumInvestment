const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { Advisor } = require("../schema/Users");

const validateRegisterInput = require("../validation/register");

router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Advisor.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({email: "Email already exists"});
        }
        const newUser = new Advisor({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
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
