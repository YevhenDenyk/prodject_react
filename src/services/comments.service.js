import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentsService = {
    getAll: () => axiosService(urls.comments)
}

export {commentsService}