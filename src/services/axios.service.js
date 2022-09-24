import axios from "axios";

import {baseURL} from "../configs";

// let axiosServices = axios.create({baseURL:baseURL});
let axiosService = axios.create({baseURL});

export {axiosService}