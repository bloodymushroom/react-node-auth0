import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import parentPackageJson from '../package.json'

const packageEntryPoint = path.resolve('../src/js/hello.js')

const packageName = parentPackageJson.name
const port = process.env.PORT || 8080
const hotReload = [
	'react-hot-loader/patch',
	`webpack-dev-server/client?http://localhost:${ port }`,
	'webpack/hot/only-dev-server'
]
const outputPath = path.join(__dirname, 'dist')
const publicPath = '/'

export default {
	devtool: 'inline-source-map',
	entry: {
		index: hotReload.concat(path.join(__dirname, 'src', 'js', 'index.js'))
	},
	devServer: {
		outputPath,
		contentBase: outputPath,
		port,
		publicPath,
		hot: true
	},
	output: {
		path: outputPath,
		filename: '[name].bundle.js',
		publicPath
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.json$/,
				use: ['json-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader?modules']
			}
		]
	},
	resolve: {
		alias: {
			[packageName]: packageEntryPoint
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
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
