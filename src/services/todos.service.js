import {axiosService} from "./axios.service";
import {urls} from "../config";

const todosService = {
    getAll: () => axiosService(urls.todos)
}

export {todosService}