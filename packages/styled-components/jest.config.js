// Jest configuration for api
const base = require("../../jest.config.base.js");

module.exports = {
    ...base,
    name: "@maniator/loader-styled-components",
    displayName: "Styled Components",
    rootDir: ".",
    roots: [
        "<rootDir>/src"
    ]
};
