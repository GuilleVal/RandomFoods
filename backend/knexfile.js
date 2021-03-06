// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  },

  homolog: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'pg',
    version: '12.1',
    connection: {
      host : '127.0.0.1',
      user : 'random_foods',
      password : 'random_foods',
      database : 'random_foods'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};