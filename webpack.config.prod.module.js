import nodeConfig from './webpack.config.prod.node'

const moduleConfig = Object.assign({}, nodeConfig)

moduleConfig.output = {
  path: nodeConfig.output.path,
  filename: nodeConfig.output.filename,
  libraryTarget: 'commonjs2'
}

export default moduleConfig
