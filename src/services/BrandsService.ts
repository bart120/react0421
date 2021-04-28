import BrandModel from "../models/BrandModel";

import { BaseService } from "./BaseService";

const URL = 'https://dev.inow.fr/formation/api/v1/marks';

class BrandsService extends BaseService<BrandModel> {
    constructor() {
        super(URL);
    }

    getAll(): Promise<Array<BrandModel>> {
        return this.getElements();
        /*let retour: Array<BrandModel> = [];
        axios.get<Array<BrandModel>>(URL).then(resp => {
            console.log(resp.data)
            retour = resp.data;
        });
        return retour;*/
        /*return axios.get<Array<BrandModel>>(URL).then(resp => {
            if (resp.status !== 200) {
                return Promise.reject("Erreur lors de l'appel au serveur");
            } else {
                return resp.data;
            }
        });*/
    }
}

export default BrandsService;