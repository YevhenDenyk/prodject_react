import {AxiosRes, axiosService} from "./axios.service";

import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: ():AxiosRes<ICar[]> => axiosService.get(urls.cars),
    // createCar: (car):AxiosRes<ICar> => axiosService.post(urls.cars, car)
}

export {carService}