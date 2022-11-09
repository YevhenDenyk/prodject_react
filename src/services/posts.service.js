import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService = {
    getAll: ()=> axiosService(urls.posts)
}

export {postsService}