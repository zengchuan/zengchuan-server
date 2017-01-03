import * as http from "http";
import {ZCConfig} from "./providers/zc-config";
import {ZCExpress} from "./providers/zc-express";

const server: http.Server = http.createServer(ZCExpress.start());

server.listen(ZCConfig.ZC_PORT);

server.on("error", (e: Error) => {
    console.log("Error starting server" + e);
});

server.on("listening", () => {
    console.log("Server started on port " + ZCConfig.ZC_PORT);
});

