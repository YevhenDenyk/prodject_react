import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll: ()=> axiosService(urls.cars),
    create: (car)=>axiosService.post(urls.cars, car),
    update: (id,car) => axiosService.put(`${urls.cars}/${id}`,car),
    delete: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}