require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports = {
  "development": {
    "username": DB_USERNAME, 
    "password": DB_PASSWORD, 
    "database": "energymdb", 
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "postgres"
  }
}