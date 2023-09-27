'use strict';

const { users } = require('../models/index');

async function handleSignup(req, res, next) {
  try {
    const userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output); // Change the status code to 201 for successful creation
  } catch (e) {
    console.error(e);
    next(e);
  }
}


async function handleSignin(req, res, next) {
  try {
    const user = {
      user: req.user, // Corrected from request.user to req.user
      token: req.user.token // Corrected from request.user.token to req.user.token
    };
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

function handleSecret(req, res, next) {
  res.status(200).send("Welcome to the secret area!"); // Changed .text() to .send() to respond with text
}

module.exports = {
  handleSignup,
  handleSignin,
  handleGetUsers,
  handleSecret
}
