const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

browserConfig = {
    entry: './src/browser/index.js',
    output:{
        path: __dirname,
        filename: "./public/bundle.js"
    },
    mode:'development',
    devServer:{
        contentBase: path.resolve(__dirname, ''),
        index: 'index.html',
        port: 9001,
        historyApiFallback: true
    },
    module:{
        rules: [
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "public/media/[name].[ext]"
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ // webpack ejecuta de abajo hacia arriba, primero, toma el archivo, luego agrega las etiquetas al html.
                    MiniCssExtractPlugin.loader, // 'style-loader', // create style tags into our html
                    'css-loader' // css-loader read our CSS from file
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                    MiniCssExtractPlugin.loader, //'style-loader', // create style tags into our html
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
    },
    plugins:[
        // new TerserPlugin(), // (esta incluido en produccion por defecto) para minificar el archivo bundle de salida, comprimir y disminuir al menos la mitad del tamaño
        new MiniCssExtractPlugin({filename:'public/css/style.css'}), //separa los css en un archivo aparte llamado style.css
        // new CleanWebpackPlugin() // limpia la carpeta de la ruta path antes de compilar para borrar todos los archivos generados por compiladas anteriores.- 
    ]
}

module.exports = browserConfig;