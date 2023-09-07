let {Sequelize} = require("sequelize");

const sequelize = new Sequelize('fullstack_sern', 'root', null, {
    host: 'localhost',
    // one of our supported dialects:
    // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;