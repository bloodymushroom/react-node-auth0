import webpack from 'webpack'

import baseConfig from './webpack.config'

const port = process.env.PORT || 8080
const hotReload = [
	'react-hot-loader/patch',
	`webpack-dev-server/client?http://localhost:${ port }`,
	'webpack/hot/only-dev-server'
]

const entries = baseConfig.entry
const devConfig = {
	entry: {}
}

for (const key in entries) {
	if (Object.prototype.hasOwnProperty.call(entries, key)) {
		devConfig.entry[key] = hotReload.concat(entries[key])
	}
}

console.log("in dev")
const outputPath = baseConfig.output.path
console.log('in dev', outputPath)
const publicPath = baseConfig.output.publicPath

devConfig.devServer = {
	outputPath,
	contentBase: outputPath,
	port,
	publicPath,
	hot: true
}

devConfig.plugins = [
	new webpack.HotModuleReplacementPlugin()
].concat(baseConfig.plugins)

export default Object.assign({}, baseConfig, devConfig)
