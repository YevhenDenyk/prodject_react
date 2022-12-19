import {AxiosResp, axiosService} from "./axios.service";
import {AxiosResponse} from "axios";

import {urls} from "../config";
import {IUser} from "../interfaces";

const userService = {
    getAll: (): AxiosResp<IUser[]> => axiosService.get(urls.users),
    getById: (id: number): AxiosResp<IUser> => axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}