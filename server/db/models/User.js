const {DataTypes} = require('sequelize')

module.exports = ( sequelize ) => {
    sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING(30),
            allowNull:false,
            isEmail:true
        },
        password:{
            type:DataTypes.STRING(16),
            allowNull:false
        }
    })
}