import './App.css';
import {Route,Routes} from "react-router-dom";

import {Main} from "./main/Main";
import {MovieList} from "./components/Movies/MovieList/MovieList";
import {MovieDetails} from "./components/Movies/MovieList/MovieDetails/MovieDetails";
import {Register,Login} from "../src/components/Account/index"
import {
    Action,
    Adventure,
    Animation,
    Comedy,
    Crime,
    Documentary,
    Drama,
    Family,
    Fantasy,
    History, Horror, Music, Mystery, Romance, ScienceFiction, Thriller, TvMovie, War, Western,
} from "./components/Movies/Genres";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route path={'/allMovies'} element={<MovieList/>}/>
                    <Route path={'allMovies/:id'} element={<MovieDetails/>}/>
                    <Route path={'/actions'} element={<Action/>}/>
                    <Route path={'actions/:id'} element={<MovieDetails/>}/>
                    <Route path={'/adventures'} element={<Adventure/>}/>
                    <Route path={'adventures/:id'} element={<MovieDetails/>}/>
                    <Route path={'/animations'} element={<Animation/>}/>
                    <Route path={'animations/:id'} element={<MovieDetails/>}/>
                    <Route path={'/comedies'} element={<Comedy/>}/>
                    <Route path={'comedies/:id'} element={<MovieDetails/>}/>
                    <Route path={'/crimes'} element={<Crime/>}/>
                    <Route path={'crimes/:id'} element={<MovieDetails/>}/>
                    <Route path={'/documentaries'} element={<Documentary/>}/>
                    <Route path={'documentaries/:id'} element={<MovieDetails/>}/>
                    <Route path={'/dramas'} element={<Drama/>}/>
                    <Route path={'dramas/:id'} element={<MovieDetails/>}/>
                    <Route path={'/families'} element={<Family/>}/>
                    <Route path={'families/:id'} element={<MovieDetails/>}/>
                    <Route path={'/fantasies'} element={<Fantasy/>}/>
                    <Route path={'fantasies/:id'} element={<MovieDetails/>}/>
                    <Route path={'/histories'} element={<History/>}/>
                    <Route path={'histories/:id'} element={<MovieDetails/>}/>
                    <Route path={'/horrors'} element={<Horror/>}/>
                    <Route path={'horrors/:id'} element={<MovieDetails/>}/>
                    <Route path={'/musics'} element={<Music/>}/>
                    <Route path={'musics/:id'} element={<MovieDetails/>}/>
                    <Route path={'/mysteries'} element={<Mystery/>}/>
                    <Route path={'mysteries/:id'} element={<MovieDetails/>}/>
                    <Route path={'/romances'} element={<Romance/>}/>
                    <Route path={'romances/:id'} element={<MovieDetails/>}/>
                    <Route path={'/scienceFictions'} element={<ScienceFiction/>}/>
                    <Route path={'scienceFictions/:id'} element={<MovieDetails/>}/>
                    <Route path={'/thrillers'} element={<Thriller/>}/>
                    <Route path={'thrillers/:id'} element={<MovieDetails/>}/>
                    <Route path={'/tvMovies'} element={<TvMovie/>}/>
                    <Route path={'tvMovies/:id'} element={<MovieDetails/>}/>
                    <Route path={'/wars'} element={<War/>}/>
                    <Route path={'wars/:id'} element={<MovieDetails/>}/>
                    <Route path={'/westerns'} element={<Western/>}/>
                    <Route path={'westerns/:id'} element={<MovieDetails/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>

            </Routes>
        </div>


    );
}

export default App;
