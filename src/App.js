import './App.css';
import {Route,Routes} from "react-router-dom";

import {MainLayOut} from "./mainLayOut/MainLayOut";
import {MovieList} from "./components/MovieList/MovieList";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
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
    History, Horror, Music, Mystery, Romance, ScienceFiction, Thriller, TvMovie, War, Western
} from "./components/Genre";

function App() {
  return (
      <div>
    <Routes>
      <Route path={'/'} element={<MainLayOut/>}>
          <Route path={'/allMovies'} element={<MovieList/>}/>
          <Route path={'/movieDetails'} element={<MovieDetails/>}/>
          <Route path={'/actions'} element={<Action/>}/>
          <Route path={'/adventures'} element={<Adventure/>}/>
          <Route path={'/animations'} element={<Animation/>}/>
          <Route path={'/comedies'} element={<Comedy/>}/>
          <Route path={'/crimes'} element={<Crime/>}/>
          <Route path={'/documentaries'} element={<Documentary/>}/>
          <Route path={'/dramas'} element={<Drama/>}/>
          <Route path={'/families'} element={<Family/>}/>
          <Route path={'/fantasies'} element={<Fantasy/>}/>
          <Route path={'/histories'} element={<History/>}/>
          <Route path={'/horrors'} element={<Horror/>}/>
          <Route path={'/musics'} element={<Music/>}/>
          <Route path={'/mysteries'} element={<Mystery/>}/>
          <Route path={'/romances'} element={<Romance/>}/>
          <Route path={'/scienceFictions'} element={<ScienceFiction/>}/>
          <Route path={'/thrillers'} element={<Thriller/>}/>
          <Route path={'/tvMovies'} element={<TvMovie/>}/>
          <Route path={'/wars'} element={<War/>}/>
          <Route path={'/westerns'} element={<Western/>}/>
      </Route>

    </Routes>
      </div>


  );
}

export default App;
