import {Observable} from "rxjs/Observable";
import {Document, Model} from "mongoose";
import "rxjs/add/observable/fromPromise";

export class ZCDao<T extends Document> {

    private model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this.model = schemaModel;
    }

    public create(item: T): Observable<T> {
        let self: any = this;
        return new Observable((observer: any) => {
            self.model.create(item, function (err: any, res: T[]): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    public find(condition: any): Observable<T[]> {
        let self: any = this;
        return new Observable((observer: any) => {
            self.model.find(condition, function (err: any, res: T[]): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next(res);
                    observer.complete();
                }
            });
        });

    }

    public update(condition: any, item: T): Observable<any> {
        return new Observable((observer: any) => {
            this.model.update(condition, item, function (err: any, affectedRows: number, raw: any): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next(raw);
                    observer.complete();
                }
            });
        });
    }

    public remove(condition: any): Observable<any> {
        return new Observable((observer: any) => {
            this.model.remove(condition, function (err: any): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next("sucess");
                    observer.complete();
                }
            });
        });
    }

    public findById(id: string): Observable<any> {
        return new Observable((observer: any) => {
            this.model.findById(id, function (err: any, res: T): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    public findByIdAndRemove(id: string): Observable<any> {
        return new Observable((observer: any) => {
            this.model.findByIdAndRemove(id, function (err: any, res: T): any {
                if (err) {
                    observer.error(err);
                } else {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

}
