const sequelize = require('sequelize');

const sequelize = new sequelize('thinkproject', 'root',{
    host: 'localhost',
    dialect:'mysql' 
});

module.exports = sequelize;