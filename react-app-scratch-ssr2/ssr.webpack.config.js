const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    output:{
        path: __dirname,
        filename: "./ssr-bundle-serverv5.js",
        libraryTarget: "commonjs2",
    },
    mode:'production',
    module:{
        rules: [
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "public/media/[name].[ext]",
                        publicPath: url => url.replace(/public/, ""),
                        emit:false
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ // webpack ejecuta de abajo hacia arriba, primero, toma el archivo, luego agrega las etiquetas al html
                    'css-loader' // css-loader read our CSS from file
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                    'css-loader', // css-loader read our CSS from file
                    'sass-loader' // convert the sass files to css 
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"], // compile es5 y es6
                        plugins: ['transform-class-properties'] // babel plugion for support class properties, you can use others plugins separeting with coma ","
                    }
                }
            }
        ]
    }
}

module.exports = serverConfig;