import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const _accessTokenKey  = `access`
const _refreshTokenKey = 'refresh'

const authService = {
    register: (user)=>axiosService.get(urls.users, user),
    login: (user)=> axiosService.get(urls.auth.login, user),
    refresh: (refresh)=> axiosService.get(urls.auth.refresh, {refresh}),

    setToken: ({access, refresh})=>{
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    deleteToken: ()=>{
        localStorage.removeItem(_refreshTokenKey);
        localStorage.removeItem(_accessTokenKey);
    },
    getAccessToken: ()=> localStorage.getItem(_accessTokenKey),
    getRefreshToken: ()=> localStorage.getItem(_refreshTokenKey)

}

export {authService}
