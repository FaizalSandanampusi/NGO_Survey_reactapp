const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

// User login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await sequelize.query(
      'SELECT * FROM survey.users WHERE username = :username',
      {
        replacements: { username },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    // User not found or password doesn't match
    if (!user[0] || !bcrypt.compareSync(password, user[0].password)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate and send JWT token
    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET_KEY);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
