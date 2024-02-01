import Sequelize from "sequelize"

const sequelize = new Sequelize ({
    "username": "admin",
    "password": "tCbDrBcT64px8#",
    "database": "system_db",
    "host": "database-1.c9wooo4ukw0f.sa-east-1.rds.amazonaws.com",
    "dialect": "mysql"
})

try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export default sequelize;