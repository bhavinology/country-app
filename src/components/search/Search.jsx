import "./search.css";
import { useData } from "../home/Home";
import React, { useState } from "react";
import Grid from "../grid/Grid";

function Searchbar({ countries, setIdSelect, setIdEdit, setEditCountry }) {
  const [searchData, setSearchData] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  function handleInput(e) {
    setSearchData(e.target.value);
  }

  function searchCountry(e) {
    const search = document.querySelector(".search");
    const title = document.querySelector(".title");
    title.classList.add("hide");
    search.classList.add("right");
    search.classList.add("actives");
    if (searchData === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }

  function clearInput() {
    const search = document.querySelector(".search");
    const title = document.querySelector(".title");
    title.classList.remove("hide");
    search.classList.toggle("right");
    search.classList.toggle("actives");
    setSearchData("");
  }

  let filteredCountries = countries.filter((c) => {
    return c.country.toLowerCase().includes(searchData.toLowerCase());
  });

  return (
    <div>
      <div className="src-container">
        <h4 className="title">My items</h4>
        <div className="search">
          <div className="icon" onClick={searchCountry}></div>
          <div className="input">
            <input
              className="src-input"
              placeholder="search countries"
              id="inputid"
              value={searchData}
              onChange={handleInput}
            ></input>
            <span className="clear" onClick={clearInput}></span>
          </div>
        </div>
      </div>

      {showSearch ? (
        <Grid
          countries={filteredCountries}
          setIdSelect={setIdSelect}
          setIdEdit={setIdEdit}
          setEditCountry={setEditCountry}
        />
      ) : (
        <Grid
          countries={countries}
          setIdSelect={setIdSelect}
          setIdEdit={setIdEdit}
          setEditCountry={setEditCountry}
        />
      )}
    </div>
  );
}

export default Searchbar;
