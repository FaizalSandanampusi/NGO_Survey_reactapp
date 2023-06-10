const bcrypt = require('bcrypt');

const generateHashedPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error generating hashed password:', error);
  }
};

generateHashedPassword('Pass#135');
