import Header from "./components/header/Header";
import CardList from "./components/card_list/CardList";
import { useState } from "react";

function App() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  return (
    <>
      <Header
        isHeaderActive={isHeaderActive}
        setHeaderActive={setHeaderActive}
      />
      <CardList isHeaderActive={isHeaderActive} />
    </>
  );
}

export default App;
