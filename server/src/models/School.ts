/**
 * Created by malaka on 7/21/17.
 */

import {Model, Schema} from "mongoose";
import {DBController} from "../controllers/db-controller";
import {IBase, IBaseModel} from "./BaseModel";
const dbCon = DBController.getInstance().getConnection();

let schoolSchema: Schema = new Schema({
  __v: { type: Number, select: false},
  name : {type: String, required: true},
  district : {type : String}
});

export const School : Model<ISchoolModel> = dbCon.model<ISchoolModel>("School", schoolSchema);

export interface ISchool extends IBase{
  name ?: string,
  district ?: string
}

export interface ISchoolModel extends ISchool, IBaseModel{}