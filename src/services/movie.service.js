import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


const movieService ={
    getAll:(page=1) => axiosService.get(`${urls.movies}?page=${page}`),
    getByGenreId:(id,page= 1) => axiosService.get(`${urls.movies}?with_genres=${id}&page=${page}`),
    searchAll:(movie) => axiosService.get(`${urls.search}?query=${movie}`),
    getMovieById:(id) => axiosService.get(`${urls.movie}/${id}`)
}
export {movieService};
