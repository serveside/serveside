const findUp = require('find-up');
const fs = require('fs');

const configPath = findUp.sync(['.servesiderc', '.serveside.json']);
const config = configPath ? JSON.parse(fs.readFileSync(configPath)) : {};

module.exports = config;
