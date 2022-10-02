import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentsService = {
    getAll: ()=> axiosService.get(urls.comments),
    createComment: (comment)=> axiosService.post(urls.comments, comment)
}

export {commentsService}