import {axiosService} from "./axios.service";
import {urls} from "../config";

const albumsService = {
    getAll: () => axiosService(urls.albums)
}

export {albumsService}