const {DataTypes, ENUM} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Favorite',{
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull:false
        },
        status: {
            type:ENUM('Alive','Dead','Unknown'),
            allowNull:false
        },
        species:{
            type: DataTypes.STRING(50),
            allowNull:false
        },
        gender:{
            type: DataTypes.ENUM('Female','Male','Genderless','unknown'),
            allowNull:false
        },
        origin:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        image:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    })
}