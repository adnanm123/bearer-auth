'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 403;
  res.statusMessage = 'Invalid Credentials';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};
