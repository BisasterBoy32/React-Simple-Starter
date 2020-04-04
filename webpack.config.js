const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "main.js",
        path : path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: {
                    loader: 'babel-loader' // specify the loader
                }
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader","sass-loader"]
            }
        ]
    }
}