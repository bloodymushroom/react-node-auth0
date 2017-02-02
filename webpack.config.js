import webpack from 'webpack'
import path from 'path'
import fileSystem from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'

const alias = {}

const secretsPath = path.join(__dirname, `secrets.${ process.env.NODE_ENV }.js`)

if (fileSystem.existsSync(secretsPath)) {
	alias.secrets = secretsPath
}

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		index: path.join(__dirname, 'src', 'js', 'index.js')
	},
	devServer: {
		outputPath: path.join(__dirname, './dist'),
		port: process.env.PORT || 8080
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules',
			}
		]
	},
	resolve: {
		alias,
		extensions: ['', '.js', '.jsx', '.css']
	},
	plugins: [
		// expose and write the allowed env vars on the compiled bundle
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				PORT: JSON.stringify(process.env.PORT)
			}
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			chunks: ['index']
		}),
		new WriteFilePlugin()
	]
}
