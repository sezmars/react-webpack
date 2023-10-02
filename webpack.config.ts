import webpack from 'webpack';

import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";
import path from "path"; //to access built-in plugins

const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = buildWebpackConfig({mode: "development", paths: buildPaths })
export default config;
