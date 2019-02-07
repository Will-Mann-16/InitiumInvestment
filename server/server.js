const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const {MONGODB_HOST, PORT} = require("./config");

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(logger('dev'));
mongoose
    .connect(
        MONGODB_HOST,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
app.listen(PORT, () => console.log(`Server up and running on port ${port} !`));