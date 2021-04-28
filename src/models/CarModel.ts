import { BaseModel } from "./BaseModel";

export interface CarModel extends BaseModel {
    model: string;
    price: number;
    dateOfCirculation: Date;
    markID: number;
}