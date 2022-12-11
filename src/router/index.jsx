import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites"
import SearchResults from "../pages/SearchResults";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/favorites" element ={<Favorites/>}/>
        <Route path="/SearchResults" element ={<SearchResults/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
