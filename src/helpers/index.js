export const checkIsList = (key) => {
  const favList = JSON.parse(localStorage.getItem("favList"));
  return favList?.includes(key);
};

const updateFavList = (key) => {
  const favList = JSON.parse(localStorage.getItem("favList")) || [];
  if (favList?.includes(key)) {
    const newFavList = favList.filter((elem) => elem.id !== key);
    localStorage.setItem("favList", JSON.stringify(newFavList));
  } else localStorage.setItem("favList", JSON.stringify([...favList, key]));
};

export const handleChange = (isActive, setIsActive, key, event) => {
  event.stopPropagation();
  updateFavList(key);
  setIsActive(!isActive);
};

export const checkIsHeader = () => JSON.parse(sessionStorage.getItem("header"));

const updateFavHeader = () => {
  if (checkIsHeader()) {
    sessionStorage.setItem("header", JSON.stringify(false));
  } else sessionStorage.setItem("header", JSON.stringify(true));
};

export const handleChangeHeader = (isActive, setIsActive) => {
  updateFavHeader();
  setIsActive(!isActive);
};
