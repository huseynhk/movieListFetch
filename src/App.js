import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>    {/* id-ye gore link elesin */}
                <Route path="moviess/:type" element={<MovieList />}></Route>    {/* type-a gore link elesin */}
                <Route path="/*" element={<h1>Error Page</h1>}></Route>{/* sehv link olanda error verecek */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
