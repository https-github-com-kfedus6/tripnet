const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false }
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
    description: { type: DataTypes.TEXT },
    nameAuthor: { type: DataTypes.STRING }
});

const FAQ = sequelize.define('FAQ', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT }
})

const Flight = sequelize.define("flight", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    startPosition: { type: DataTypes.STRING },
    finishPosition: { type: DataTypes.STRING },
    countFreePlace: { type: DataTypes.INTEGER },
    startDate: { type: DataTypes.STRING },
    finishDate: { type: DataTypes.STRING },
    startTime: { type: DataTypes.STRING },
    finishTime: { type: DataTypes.STRING },
    timeFlight: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    map: { type: DataTypes.TEXT }
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
    sunday: { type: DataTypes.STRING }
})

const ScheduleBusStatus = sequelize.define('scheduleBusStatus', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.BOOLEAN, defaultValue: false },
})

const ParamsFlight = sequelize.define('paramsFlight', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    isWifi: { type: DataTypes.BOOLEAN, allowNull: false },
    isWC: { type: DataTypes.BOOLEAN, allowNull: false },
    is220V: { type: DataTypes.BOOLEAN, allowNull: false },
    isMultimedia: { type: DataTypes.BOOLEAN, allowNull: false },
    isAirConditioning: { type: DataTypes.BOOLEAN, allowNull: false }
})

const FlightOrder = sequelize.define("flightOrder", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    authorName: { type: DataTypes.STRING },
    countTicket: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN, defaultValue: null },
});

Flight.hasMany(FlightOrder);
FlightOrder.belongsTo(Flight);

User.hasMany(FlightOrder,{as:"user"});
FlightOrder.belongsTo(User);

Flight.hasMany(ParamsFlight, { as: 'params' });
ParamsFlight.belongsTo(Flight);

Flight.hasMany(ScheduleBus, { as: "schefule" });
ScheduleBus.belongsTo(Flight);

ScheduleBus.hasMany(ScheduleBusStatus, { as: 'status' });
ScheduleBusStatus.belongsTo(ScheduleBus)

Flight.hasMany(ScheduleBusStatus)
ScheduleBusStatus.belongsTo(Flight)

module.exports = { User, Flight, InfoCompany, Responce, Novetly, FAQ, Blog, ScheduleBus, ScheduleBusStatus, ParamsFlight, FlightOrder };