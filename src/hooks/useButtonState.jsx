import { useEffect, useState } from "react";

function useButtonState(initialState, localStorageKey) {
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || initialState
  );
  const handleButtonClick = (event) => {
    event.stopPropagation();
    console.log(isActive);
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(isActive));
  }, [isActive]);

  return { isActive, handleButtonClick };
}

export default useButtonState;
