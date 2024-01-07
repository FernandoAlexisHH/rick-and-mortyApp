const {DataTypes} = require('sequelize')

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
            type:DataTypes.ENUM('Alive','Dead','unknown'),
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
        image:{
            type:DataTypes.STRING(150),
            allowNull:false
        }
    })
}