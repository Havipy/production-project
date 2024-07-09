
import { BuildOptions } from "./types";
import webpack from "webpack";
import { buildPlugins } from "../build/buildPlugins";
import { buildLoaders } from "../build/buildLoaders";
import { buildResolvers } from "../build/buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {paths, mode, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options)
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolvers(),
    plugins: buildPlugins(options)
  }
}

