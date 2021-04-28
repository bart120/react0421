import { UserModel } from "../../../models/UserModel";

const AUTH_LOGON = 'AUTH_LOGON';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface IAuthReducer {
    user?: UserModel;
    isConnected?: boolean;
}

export const logon = (payload: any) => {
    console.log('payload', payload);
    return { type: AUTH_LOGON, payload };
}

export const logout = (payload: any) => {
    return { type: AUTH_LOGOUT, payload };
};

const INITAL_STATE: IAuthReducer = {
    user: JSON.parse(sessionStorage.getItem('USER') || '{}'),
    isConnected: sessionStorage.getItem('USER') != null
}

const reducer = (state = INITAL_STATE, action: any) => {
    console.log('action', action);
    switch (action.type) {
        case AUTH_LOGON:
            //appel serveur auth
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };
        case AUTH_LOGOUT:
            sessionStorage.removeItem('USER');
            return { isConnected: false, user: null };
        default:
            return state;
    }

}
export default reducer;