import { createContext, useContext, useState } from "react";
import { countryList } from "./data";
import "./home.css";
// import Popup from "./popup";
import Searchbar from "../search/search";

function Home() {
  const [countries, setCountries] = useState(countryList);
  const [showModal, setShowModal] = useState(false);
  const [idselect, setIdSelect] = useState();
  const [idEdit, setIdEdit] = useState();

  console.log(countries);
  console.log(idselect);

  const dataContext = createContext();
  const useData = () => useContext(dataContext);
  function addCountry() {
    setShowModal(true);
  }

  function delCountry() {
    let gridCont = document.querySelector(".container");
    if (idselect === undefined) {
      gridCont.firstChild.classList.add("active");
      setIdSelect(gridCont.firstChild.id);
      console.log(gridCont.firstChild.id);
      console.log(gridCont.firstChild);
    }

    let delId = idselect;
    console.log("delblock run", "The id we want to delete is", delId);
    let updatedCountries = countries.filter((c) => {
      return c.key !== Number(delId);
    });
    console.log(updatedCountries);
    setCountries(updatedCountries);
    // setIdSelect("");
  }

  function setEditCountry(name) {
    let updatedCountries = countries.map((c) => {
      if (c.key === Number(idEdit)) {
        return { ...c, country: name };
      } else return c;
    });
    console.log("edit", updatedCountries);
    setCountries(updatedCountries);
    setIdSelect();
  }
  console.log(idEdit);

  return (
    <div className="main">
      <dataContext.Provider
        value={(countries, setIdSelect, setIdEdit, setEditCountry)}
      >
        <Searchbar
        //   countries={countries}
        //   setIdSelect={setIdSelect}
        //   setIdEdit={setIdEdit}
        //   setEditCountry={setEditCountry}
        />
        {/* <Grid countries={countries} /> */}
        {showModal && (
          <Popup
            setModal={setShowModal}
            // countries={countries}
            // setCountries={setCountries}
          />
        )}
      </dataContext.Provider>
      <div className="btn-grp">
        <button onClick={addCountry} id="new-btn" className="btn">
          New
        </button>
        <button id="del-btn" className="btn" onClick={delCountry}>
          Delete
        </button>
      </div>
    </div>
  );
}

export { useData, Home };

// value on new,delete and item div tag
