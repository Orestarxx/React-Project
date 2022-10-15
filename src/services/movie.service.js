import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


const movieService ={
    getAll:() => axiosService.get(urls.movies),
    getByGenreId:(id) => axiosService.get(`${urls.movies}?with_genres=${id}`)
}
export {movieService};
