import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CardList from "./components/CardList/CardList";
import MarvelHeader from "./components/MarvelHeader/MarvelHeader.jsx";
import { useState } from "react";
import useApiData from "./hooks/useApiData";
import ComicDetails from "./components/ComicDetails/ComicDetails";
import { FavProvider } from "./helpers/FavContext";

function App() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useApiData(
    "https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=2d1f3ca2aae6e7d1dcf286943ea83e71&hash=30cb45c0b67c40153deb047e87c44d44&limit=100&offset=0"
  );

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleSearchChange = (newSearchText) => {
    setSearchText(newSearchText);
  };
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/MarvelChallenge/"}>
      <FavProvider>
        <MarvelHeader
          isHeaderActive={isHeaderActive}
          setHeaderActive={setHeaderActive}
          onSearchChange={handleSearchChange}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CardList
                isHeaderActive={isHeaderActive}
                objects={data.data.results}
                searchText={searchText}
              />
            }
          ></Route>
          <Route path="/comic/:comicId" element={<ComicDetails />}></Route>
        </Routes>
      </FavProvider>
    </BrowserRouter>
  );
}

export default App;
