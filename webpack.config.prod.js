import webpack from 'webpack'
import merge from 'webpack-merge'

import baseConfig from './webpack.config'

export default merge(baseConfig, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin()
	]
})
