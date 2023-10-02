import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html}),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        })
    ]
}

export default buildPlugins
