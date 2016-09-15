var dotenv = require('dotenv').config();

module.exports = {

  development: {
    client: 'postgres',
    connection: 'postgres://localhost/blog'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
