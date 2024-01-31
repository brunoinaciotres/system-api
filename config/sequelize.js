import Sequelize from "sequelize"

const sequelize = new Sequelize ({
    "username": "root",
    "password": "tCbDrBcT64px8#",
    "database": "system_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
})

try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export default sequelize;