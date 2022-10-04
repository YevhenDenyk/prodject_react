import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService ={
    getAll: (id)=>axiosService(`${urls.posts}/${id}`)
}

export {postsService}