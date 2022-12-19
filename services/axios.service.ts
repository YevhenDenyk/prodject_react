import axios, {AxiosResponse} from "axios";
import {baseURL} from "../config";


let axiosService = axios.create({baseURL});

type AxiosResp<T> = Promise<AxiosResponse<T>>

export {axiosService, AxiosResp}