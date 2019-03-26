const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const {MONGODB_HOST, PORT} = require("./config");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const businessRouter = require("./routes/business");


mongoose
    .connect(
        MONGODB_HOST,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const app = express();

require('./passport');

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());


app.use('/auth', authRouter);
app.use('/user', passport.authenticate('jwt', {session:false}), userRouter);
app.use('/business', passport.authenticate('jwt', {session:false}), businessRouter);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));