import axios from "axios";

import {baseURL} from "../configs2";

const axiosServise = axios.create({baseURL})

export {axiosServise}