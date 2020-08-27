// Jest configuration for api
const base = require("../../jest.config.base.js");

module.exports = {
    ...base,
    name: "@maniator/loader-apollo",
    displayName: "Apollo",
    rootDir: ".",
    roots: [
        "<rootDir>/src"
    ]
};
