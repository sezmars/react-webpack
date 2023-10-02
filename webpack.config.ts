import path from "path";
import {BuildEnv, BuildPaths} from "./config/build-webpack/types/config";
import buildWebpackConfig from "./config/build-webpack/buildWebpackConfig"; // to access built-in plugins


export default (env: BuildEnv) => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || "development"
    const isDev = mode === "development"
    const PORT: number = env.port || 3000;
    return buildWebpackConfig({mode, paths: buildPaths, port: PORT, isDev})
};
