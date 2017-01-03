import {Document, Schema, Model} from "mongoose";
import ZCDb = require("../../../../../providers/zc-db");

export interface IUserModel extends Document {
}

export let UserSchema: Schema = new Schema({}, {strict: false});

export const User: Model<IUserModel> = ZCDb.zcConnection.model<IUserModel>("User", UserSchema);
