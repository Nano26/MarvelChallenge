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
