const path = require("path");

module.exports = {
    entry: {
        "build/list": ["./src/list.js"],
        "build/detail": ["./src/detail.js"],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js",
    },
    mode: process.env.NODE_ENV,
    externals: {},
};
