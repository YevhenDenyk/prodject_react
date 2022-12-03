import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentsService = {
    getAll: ()=> axiosService.get(urls.comments),
    getById: (id)=> axiosService.get(`${urls.comments}/${id}`)
}

export {commentsService}