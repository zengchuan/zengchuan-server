import {User, IUserModel} from "../models/User";
import {ZCDao} from "../../../../../providers/zc-dao";

export class UserDao extends ZCDao<IUserModel> {
    constructor() {
        super(User);
    }
}
