require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres", 
    "password": "123", 
    "database": "energymdb", 
    "host": "localhost",
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