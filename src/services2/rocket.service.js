import {axiosServise} from "./axios.servise";
import {urls} from "../configs2";

const rocketService = {
    getAll: () => axiosServise.get(urls.rockets)
}

export {rocketService}