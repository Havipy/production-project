import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";



export const buildLoaders= (options: BuildOptions): RuleSetRule[]  => {
  const cssLoaders = {
    test:  /\.(sa|sc|c)ss$/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: options.isDev 
            ? '[path][name]__[local]--[hash:base64:5]' 
            : '[hash:base64:5]'
          },
          
        }
      },
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  return [
    tsLoader,
    cssLoaders,
  ]
}