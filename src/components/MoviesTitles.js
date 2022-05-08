import React, { useState } from "react";
function MoviesTitles() {
  const [titles, setTitles] = useState([]);
  const onInputChange = async () => {
    await fetch(
      "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=spiderman"
    )
      .then((response) => response.json())
      .then((data) => setTitles(data));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h2>Movie Titles</h2>
        <input
          type="text"
          name="movies"
          style={{
            padding: "7px",
            width: "222px",
            borderRadius:"12px",
            border:"1px solid blue",
            outline: "none",
          }}
          onChange={onInputChange}
        />

        <h3>Result :Movie Titles</h3>
        {titles?.data?.map((title, index) => {
          return (
            <div key={index}>
              <ol>{title.Title}</ol>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MoviesTitles;
