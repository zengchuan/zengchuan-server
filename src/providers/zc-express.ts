import {json, urlencoded} from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import {ZCConfig} from "./zc-config";
import ZCDb = require("./zc-db");
import {UserRoute} from "../app/zc/love/user/api/UserRoute";

export class ZCExpress {

    public static start(): any {
        ZCDb.connect();

        let app: express.Application = express();

        app.set("views", path.join(__dirname, "../views"));
        app.set("view engine", "jade");

        // app.set("port", ZCConfig.ZC_PORT);
        app.use(logger("dev"));
        app.use(json());
        app.use(urlencoded({extended: false}));

        // routes
        // for (let route of ZCConfig.globFiles(ZCConfig.ZC_ROUTES)) {
        //     require(path.resolve(route)).default(app);
        // }
        app.use("/" + ZCConfig.ZC_API_PRE, new UserRoute().getRoutes());

        // middleware for CORS requests
        app.use(function (req: express.Request, res: express.Response, next: express.NextFunction): void {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

            next();
        });

        // catch 404 and forward to error handler
        app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
            let err: Error = new Error("Not Found");
            next(err);
        });

        // production error handler
        app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
            res.status(err.status || 500).send(err);
        });
        return app;
    }

}
