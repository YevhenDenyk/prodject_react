import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService = {
    getAll: (postId) => axiosService(`${urls.posts}/${postId}`)
}

export {postsService}