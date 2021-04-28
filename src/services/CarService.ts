import { CarModel } from "../models/CarModel";
import { BaseService } from "./BaseService";

const URL = 'https://dev.inow.fr/formation/api/v1/cars';

export class CarService extends BaseService<CarModel>{
    constructor() {
        super(URL);
    }

    getAll(): Promise<Array<CarModel>> {
        return this.getElements();
    }

    getCarById(id: number): Promise<CarModel> {
        return this.getElement(id);
    }

    save(car: CarModel): Promise<CarModel> {
        car.price = +car.price;
        car.markID = +car.markID;
        return this.insert(car);
    }
}