import webpack from 'webpack'
import merge from 'webpack-merge'

import baseConfig from './webpack.config'

export default merge(baseConfig, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	]
})
