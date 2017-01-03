import {UserRoute} from "../api/UserRoute";
import {ZCConfig} from "../../../../../providers/zc-config";

export default class UserRoutes {

    public static activate(app: any): void {
        app.use("/" + ZCConfig.ZC_API_PRE, new UserRoute().getRoutes());
    }

    constructor(app: any) {
        UserRoutes.activate(app);
    }

}
