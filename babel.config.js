const plugins = [
    [
        'babel-plugin-styled-components',
        {
            pure: true,
            displayName: true
        }
    ],
    'babel-plugin-nodejs-import-images',
    [
        '@babel/plugin-transform-destructuring',
        {
            useBuiltIns: true
        }
    ],
    [
        '@babel/plugin-transform-runtime',
        {
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "version": "7.11.0"
        }
    ]
];
const presets = [
    [
        '@babel/preset-env', {
            modules: "commonjs",
            targets: {
                node: "current"
            }
        }
    ],
    [
        '@babel/preset-react',
        {
            development: process.env.NODE_ENV === "development",
            useBuiltIns: true
        }
    ]
];

module.exports = { plugins, presets };
