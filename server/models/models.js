const sequelize = require("../db");
const {DataTypes}=require("sequelize");

const User=sequelize.define("user",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    nick:{type:DataTypes.INTEGER,unique:true},
    email:{type:DataTypes.STRING},
    isAdmin:{type:DataTypes.STRING,defaultValue:false},
    image:{type:DataTypes.STRING}
});

const InfoCompany=sequelize.define("infoCompany",{
    email:{type:DataTypes.STRING},
    telephone:{type:DataTypes.STRING},
    openingHours:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}
});

const Responce=sequelize.define('responce',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    description:{type:DataTypes.STRING},
    responceId:{type:DataTypes.INTEGER,defaultValue:null,allowNull:true}
});

const SortingFlight=sequelize.define("sotringFlight",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING}
});

const Flight=sequelize.define("flight",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    image:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    price:{type:DataTypes.STRING},
    startPosition:{type:DataTypes.STRING},
    finishPosition:{type:DataTypes.STRING},
    countFreePlace:{type:DataTypes.INTEGER},
    startData:{type:DataTypes.DATE},
    description:{type:DataTypes.STRING}
});

User.hasMany(Responce,{as:"responce"});
Responce.belongsTo(User);

module.exports={User,Flight,SortingFlight,InfoCompany,Responce};