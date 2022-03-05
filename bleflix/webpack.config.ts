import path from "path";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

interface WebpackConfigParameters {
  development?: boolean;
  production?: boolean;
}

const webpackConfig = (env: WebpackConfigParameters) => {
  // 개발용인지 배포용인지 판단
  const isDevelopment = !!env.development;

  const config: Configuration = {
    name: "react-typescript-site",
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "hidden-source-map" : "inline-source-map",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        "@src": path.resolve(__dirname, "src"),
      },
    },
    entry: {
      bundle: "./index",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { browsers: ["IE 10"] },
                  debug: isDevelopment,
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            env: {
              development: {
                plugins: [isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean),
              },
            },
          },
          exclude: path.join(__dirname, "node_modules"),
        },
        {
          test: /\.css?$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./deploy.html",
        favicon: "src/assets/favicon/favicon.ico",
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        // eslint: {
        //   files: "./src/**/*",
        // },
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: isDevelopment ? "development" : "production",
        PUBLIC_URL: isDevelopment ? "/" : "/react-clone-project",
      }),
    ],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath: isDevelopment ? "/dist/" : "/react-clone-project/",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      devMiddleware: { publicPath: "/dist/" },
      static: { directory: path.resolve(__dirname) },
    },
  };

  // 개발용이라면
  if (isDevelopment && config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: {
          useURLPolyfill: true,
        },
      }),
    );
  }
  // 배포용이라면
  if (!isDevelopment && config.plugins) {
  }

  return config;
};

export default webpackConfig;
