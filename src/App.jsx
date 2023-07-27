import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import { useState } from "react";
import DataContext from "./helpers/DataContext";
import useApiData from "./hooks/useApiData";

function App() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useApiData(
    "http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=2d1f3ca2aae6e7d1dcf286943ea83e71&hash=30cb45c0b67c40153deb047e87c44d44&limit=100&offset=0"
  );
  console.log("3")

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
    <DataContext.Provider value={data}>
      {console.log("2")}
      <Header
        isHeaderActive={isHeaderActive}
        setHeaderActive={setHeaderActive}
        onSearchChange={handleSearchChange}
      />
      <CardList isHeaderActive={isHeaderActive} objects={data.data.results} searchText={searchText} />
    </DataContext.Provider>
  );
}

export default App;
