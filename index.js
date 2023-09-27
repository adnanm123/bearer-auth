'use strict';

require('dotenv').config();
const { sequelize } = require('./src/auth/models/index');
const server = require('./src/server');
const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    server.start(PORT);
  });
