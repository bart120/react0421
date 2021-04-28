import { BaseModel } from "./BaseModel";

interface BrandModel extends BaseModel {
    //id?: number;
    name: string;
    image: string;
}

export default BrandModel;