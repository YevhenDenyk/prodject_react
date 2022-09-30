import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    getUsers: () => axiosService.get(urls.users)
}

export {userService}