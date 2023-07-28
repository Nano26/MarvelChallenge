import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ComicDetails.module.css";
import useApiData from "../../hooks/useApiData";

function ComicDetails() {
  const { comicId } = useParams();
  const { data, loading, error } = useApiData(
    `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1000&apikey=2d1f3ca2aae6e7d1dcf286943ea83e71&hash=30cb45c0b67c40153deb047e87c44d44`
  );

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const comicInfo = data.data.results[0];
  const writer = comicInfo.creators.items.find((elem) => elem.role === "writer")?.name || "Unknown"
  const penciler = comicInfo.creators.items.find((elem) => elem.role.includes("pencil"))?.name || "Unknown"
  const coverArtist = comicInfo.creators.items.find((elem) => elem.role.includes("(cover)"))?.name || "Unknown"

  return (
    <div className={classes.comicDetails}>
      <img
        className={classes.img}
        src={`${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`}
        alt="Portada de Comic"
      />
      <div>
        <h2>{comicInfo.title}</h2>
        <h4>
          Published:{" "}
          {new Date(comicInfo.dates[0].date).toLocaleDateString(
            "en-US",
            dateOptions
          )}
        </h4>
        <h4>Writer: {writer}</h4>
        <h4>Penciler: {penciler}</h4>
        <h4>Cover Artis: {coverArtist}</h4>
        <p>{comicInfo.description}</p>
      </div>
    </div>
  );
}

export default ComicDetails;
