const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    password: { type:DataTypes.STRING },
    isAdmin: { type: DataTypes.STRING, defaultValue: false }
});

const InfoCompany = sequelize.define("infoCompany", {
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    openingHours: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
});

const Responce = sequelize.define('responce', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING },
    responceId: { type: DataTypes.INTEGER, defaultValue: null, allowNull: true }
});

const SortingFlight = sequelize.define("sotringFlight", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
});

const FAQ=sequelize.define('FAQ',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}
})

const Flight = sequelize.define("flight", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    startPosition: { type: DataTypes.STRING },
    finishPosition: { type: DataTypes.STRING },
    countFreePlace: { type: DataTypes.INTEGER },
    startData: { type: DataTypes.STRING },
    finishDate: { type: DataTypes.STRING },
    startTime: { type: DataTypes.STRING },
    finishTime: { type: DataTypes.STRING },
    timeFlight: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
});

const Novetly=sequelize.define("novetly",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }    
})

User.hasMany(Responce, { as: "responce" });
Responce.belongsTo(User);

module.exports = { User, Flight, SortingFlight, InfoCompany, Responce, Novetly, FAQ };