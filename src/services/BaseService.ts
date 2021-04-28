import axios from 'axios';
import { BaseModel } from '../models/BaseModel';

export abstract class BaseService<T extends BaseModel> {

    //private _url:string =  '';

    constructor(private _url: string) {
        //this._url = url;
    }

    protected getElements(): Promise<Array<T>> {
        return axios.get<Array<T>>(this._url).then(this.promiseResolveArray).catch(this.promiseReject);
    }

    protected getElement(id: number): Promise<T> {
        return axios.get<T>(`${this._url}/${id}`).then(this.promiseResolve).catch(this.promiseReject);
    }

    protected insert(element: T): Promise<T> {
        return axios.post<T>(this._url, element).then(this.promiseResolve).catch(this.promiseReject);
    }

    protected update(element: T): Promise<T> {
        return axios.put<T>(`${this._url}/${element.id}`, element).then(this.promiseResolve).catch(this.promiseReject);
    }

    protected delete(id: number): Promise<T> {
        return axios.get<T>(`${this._url}/${id}`).then(this.promiseResolve).catch(this.promiseReject);
    }

    private promiseResolveArray(resp: any): Promise<Array<T>> {
        if (resp.status === 401) {
            alert("Non non non!!!");
        }
        if (resp.status !== 200 || resp.data == null) {
            return Promise.reject("Erreur lors de l'appel au serveur");
        } else {
            return resp.data;
        }
    }

    private promiseResolve(resp: any): Promise<T> {
        if (resp.status !== 200 || resp.data == null) {
            return Promise.reject("Erreur lors de l'appel au serveur");
        } else {
            return resp.data;
        }
    }

    private promiseReject(err: any): Promise<any> {
        return Promise.reject(err)
    }
}