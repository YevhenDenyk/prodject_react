import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const carService ={
    getAll: (page=1)=> axiosService(urls.cars, {params:{page}}),
    create: (car)=> axiosService.post(urls.cars, car),
    update: (id, car)=> axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id)=> axiosService.delete(`${urls.cars}/${id}`),
    addPhoto: (id, data)=> axiosService.patch(`${urls.cars}/${id}`, data)
}

export {carService}