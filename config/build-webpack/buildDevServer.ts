import {Configuration as DevConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

const buildDevServer = (options: BuildOptions): DevConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}
export default buildDevServer
