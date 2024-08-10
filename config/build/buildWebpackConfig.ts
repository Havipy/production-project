import webpack from 'webpack';
import { buildLoaders } from '../build/buildLoaders';
import { buildPlugins } from '../build/buildPlugins';
import { buildResolvers } from '../build/buildResolvers';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
  };
}
