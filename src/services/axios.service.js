import axios from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL})
const token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDIwNWVmMTMxYjI4OGQxMzhiMDZiMmRjN2FiMGM0NiIsInN1YiI6IjYzNGE3NGQ4YzhhMmQ0MDA3ZmM2MDIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xe11vZi76tGQxDX298ZOItYFM7DZ_WWsMyvFiH2jPOw'

axiosService.interceptors.request.use((config) =>{
    config.headers.Authorization =`Bearer ${token}`
    console.log(config);
    return config
});


export {axiosService}