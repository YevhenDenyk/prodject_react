import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    getAll: () => axiosService.get(urls.users),
    createUser: (user) => axiosService.post(urls.users, user)
}

export {userService}