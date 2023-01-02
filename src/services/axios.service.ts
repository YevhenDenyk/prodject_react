import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs";

type AxiosRes<T> = Promise<AxiosResponse<T>>

let axiosService = axios.create({baseURL});

export {axiosService}
export type {AxiosRes}