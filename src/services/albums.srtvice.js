import {axiosService} from "./axios.service";
import {urls} from "../config";

const albumsSrtvice ={
    getAll: ()=> axiosService.get(urls.albums)
}

export {albumsSrtvice}