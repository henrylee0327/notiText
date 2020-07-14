// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'Promises',
      user:     'henrylee',
      password: 'tTeski3#'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};

