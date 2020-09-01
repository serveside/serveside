const presets = [
    [
        "@babel/preset-env", {
            modules: "commonjs",
            targets: {
                node: "current"
            },
            useBuiltIns: "usage",
            corejs: 3
        }
    ],
    [
        "@babel/preset-react",
        {
            development: process.env.NODE_ENV === "development",
            useBuiltIns: true
        }
    ]
];

const plugins = [
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

const ignore = [
    "*.stories.js*",
    "**/dist/**"
]

module.exports = (api) => {
    const env = api.env();
    const isProduction = api.env("production");
    api.cache.using(() => env);
    api.cache.invalidate(() => isProduction);

    return ({ plugins, presets, ignore });
};
