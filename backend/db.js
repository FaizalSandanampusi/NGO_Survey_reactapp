const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres@123',
    port: 5432,
  });

  pool.query('SELECT * FROM survey.users', (error, result) => {
    if (error) {
      console.error('Error connecting to PostgreSQL:', error);
    } else {
      console.log(result.rows);
    }
  });
  
  