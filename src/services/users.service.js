import {axiosService} from "./axios.service";
import {urls} from "../config";

const usersService = {
    getAll: ()=> axiosService(urls.users)
}

export {usersService}