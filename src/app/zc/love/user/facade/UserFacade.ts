import {Observable} from "rxjs/Observable";
import {UserDao} from "../dao/UserDao";
import {IUserModel} from "../models/User";


export class UserFacade {
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    public create(user: IUserModel): Observable<IUserModel> {
        return this.userDao.create(user);
    }

    public find(): Observable<IUserModel[]> {
        return this.userDao.find({});
    }
}
