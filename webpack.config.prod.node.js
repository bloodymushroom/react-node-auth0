import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'

import webConfig from './webpack.config.prod.web'

export default merge(webConfig, {
  target: 'node',
  externals: [nodeExternals()]
})
