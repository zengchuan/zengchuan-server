import express = require("express");
import {Model} from "mongoose";
import {UserFacade} from "../facade/UserFacade";
import {User, IUserModel} from "../models/User";
import "rxjs/add/operator/mergeMap";

export class UserResource {

    public create(req: express.Request, res: express.Response): void {
        // let user: IUserModel = <IUserModel>req['body'];
        let user: any = new User(req.body);
        // let user = new User({"name": "4", "sex" : "1", "volleyball" : "1"});
        let userFacade: UserFacade = new UserFacade();
        userFacade.create(user)
            .mergeMap(() => userFacade.find())
            .subscribe((datas: any) =>  {
                res.send(datas);
            });
    }

    public find(req: express.Request, res: express.Response): void {
        console.log("find begin");
        let userFacade: UserFacade = new UserFacade();
        userFacade.find()
            .subscribe((datas: any) =>  {
                res.send(datas);
            });
    }
}
