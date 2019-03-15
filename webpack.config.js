const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",  
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader']},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                     
            {
                test: /\.html$/,
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: "html-loader",
                    loader: 'file-loader',
                    options: { minimize: true }
                  }
                ]
              }
        ]
    }
};






