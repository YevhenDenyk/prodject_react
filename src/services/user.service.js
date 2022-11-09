import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService ={
    getAll: ()=> axiosService(urls.users)
}

export {userService}