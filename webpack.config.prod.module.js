import webpack from 'webpack'
import path from 'path'
import fileSystem from 'fs'
import nodeExternals from 'webpack-node-externals'

const alias = {}

const secretsPath = path.join(__dirname, `secrets.${ process.env.NODE_ENV }.js`)

if (fileSystem.existsSync(secretsPath)) {
	alias.secrets = secretsPath
}

const outputPath = path.join(__dirname, 'dist')

export default {
	devtool: 'cheap-module-source-map',
	target: 'node',
	externals: [nodeExternals()],
	entry: {
		index: path.join(__dirname, 'src', 'js', 'hello.js')
	},
	output: {
		path: outputPath,
		filename: '[name].bundle.js',
		libraryTarget: 'commonjs2'
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
		alias
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				PORT: JSON.stringify(process.env.PORT)
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	]
}
