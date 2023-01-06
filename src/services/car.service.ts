import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {ICar} from "../interfaces";

const carService = {
    getAll: ():AxiosRes<ICar[]> => axiosService.get(urls.cars),
    create: (car:ICar):AxiosRes<ICar> => axiosService.post(urls.cars, car),
    getByID: (id:string):AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`)
}

export {carService}