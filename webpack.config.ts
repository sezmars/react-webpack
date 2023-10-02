import webpack from 'webpack';

import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path"; // to access built-in plugins


export default (env: BuildEnv) => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || "development"
    const isDev = mode === "development"
    const PORT: number = env.port || 3000;
    return buildWebpackConfig({mode, paths: buildPaths, port: PORT, isDev})
};