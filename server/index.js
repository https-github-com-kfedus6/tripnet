require("dotenv").config();
const express = require("express");
const cors = require('cors');
const sequelize = require('./db');
const fileUpload = require("express-fileupload")
const path = require('path');
const router = require("express")();
const models = require("./models/models");
const PORT = process.env.PORT;

const app = express(router);


app.use(express.json())
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(cors())
app.use('/api', router)
//app.use(errorMiddlawere)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {

            console.log('server started on port:' + PORT);

        });
    }
    catch (error) {
        console.log(error);
    }
}

start();