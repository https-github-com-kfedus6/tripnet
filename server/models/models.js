const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.STRING, defaultValue: false }
});

const InfoCompany = sequelize.define("infoCompany", {
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    openingHours: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT }
});

const Responce = sequelize.define('responce', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING },
    responceId: { type: DataTypes.INTEGER, defaultValue: null, allowNull: true },
    nameAuthor: { type: DataTypes.STRING }
});

const SortingFlight = sequelize.define("sotringFlight", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
});

const FAQ = sequelize.define('FAQ', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT }
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
    description: { type: DataTypes.TEXT }
});

const Novetly = sequelize.define("novetly", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
});

const Blog = sequelize.define('blog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    name: { type: DataTypes.STRING }
});

const FlightComfort = sequelize.define('flightComfort', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING }
})

const ScheduleBus = sequelize.define('scheduleBus', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    scheduleWith: { type: DataTypes.STRING },
    scheduleTo: { type: DataTypes.STRING },
    monday: { type: DataTypes.STRING },
    tuesday: { type: DataTypes.STRING },
    wednesday: { type: DataTypes.STRING },
    thursday: { type: DataTypes.STRING },
    friday: { type: DataTypes.STRING },
    suturday: { type: DataTypes.STRING },
    sunday: { type: DataTypes.STRING },
    statusOne: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusTwo: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusThree: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusFour: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusFive: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusSix: { type: DataTypes.BOOLEAN, defaultValue: false },
    statusSeven: { type: DataTypes.BOOLEAN, defaultValue: false }
})

ScheduleBus.hasMany(Flight)
Flight.belongsTo(ScheduleBus)


module.exports = { User, Flight, SortingFlight, InfoCompany, Responce, Novetly, FAQ, Blog, FlightComfort, ScheduleBus };