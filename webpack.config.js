module.exports ={
    entry: './src/main.js', // Qual arquivo principal
    // Para qual lugar e arquivo que devo enviar o c�digo convertido
    output: {
        path: __dirname + '/public', // Variavel global que refere ao webpack.config.js, onde ser� jogado arquivo bundle.js
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public' //Caminho onde deve abrir o servidor da aplica��o
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}

// Em package.json as configura��es de "scripts"
// Executar direto o babel
// "dev": "babel ./main.js -o ./bundle.js -w"

// Executar webpack
//"dev": "webpack --mode=development -w" 
//-w � usado para deixar ele executando e monitorando o main.js a cada altera��o do fonte