import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService = {
    getAll: () => axiosService.get(urls.posts)
}

export {postsService}