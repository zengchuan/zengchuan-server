import mongoose = require("mongoose");
import {ZCConfig} from "./zc-config";

class ZCDb {
    public static zcMongoose: any;
    public static zcConnection: mongoose.Connection;

    public static connect(): any {
        if (this.zcMongoose) {
            return this.zcMongoose;
        }

        this.zcConnection = mongoose.connection;
        this.zcConnection.once("open", () => {
            console.log("zc Mongoose connection");
        });

        this.zcMongoose = mongoose.connect(ZCConfig.ZC_DB_CONNECTION);
        return this.zcMongoose;
    };

    constructor() {
        ZCDb.connect();
    }

}

ZCDb.connect();
export = ZCDb;
