import express = require("express");
import {UserResource} from "./UserResource";


export class UserRoute {
    private userResource: UserResource;

    constructor() {
        this.userResource = new UserResource();
    }

    public getRoutes(): any {
        let router: any = express.Router();
        let userResource: UserResource = this.userResource;

        router.get("/zc-love/user/all", userResource.find);
        router.post("/zc-love/user/create", userResource.create);

        return router;
    }

}
