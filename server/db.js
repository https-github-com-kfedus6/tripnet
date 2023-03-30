const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    'tripnet',
    'user1',
    '123QWE456asd@',
    {
        dialect: "mysql",
        host: "127.0.0.1"
    }
);