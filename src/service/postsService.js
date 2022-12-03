import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService = {
    getAll: () => axiosService(urls.posts),
    getFromID: (id)=> axiosService(`${urls.posts}/${id}`)
}

export {postsService}