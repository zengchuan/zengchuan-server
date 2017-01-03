// import {sync} from "glob";
// import {union} from "lodash";

export class ZCConfig {
    public static ZC_DB_CONNECTION: string = "mongodb://zengchuan:zengchuan@localhost:27017/ZCLove";
    public static ZC_API_PRE: string = "zc-api";
    public static ZC_PORT: number = 3000;
    public static ZC_ROUTES: string = "./src/app/**/routes/**/*.ts";

    // public static globFiles(location: string): Array<string> {
    //     return union([], sync(location));
    // }
}
