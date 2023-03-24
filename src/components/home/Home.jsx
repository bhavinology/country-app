import { useState } from "react";
import { countryList } from "../../data/data";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Popup from "../popup/Popup";
import Searchbar from "../search/Search";

function Home() {
  const [countries, setCountries] = useState(countryList);
  const [showModal, setShowModal] = useState(false);
  const [idselect, setIdSelect] = useState();
  const [idEdit, setIdEdit] = useState();

  console.log(countries);
  console.log(idselect);

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
      <div className="top-div">
        <h4 className="home-title">Hi</h4>
        <FontAwesomeIcon
          className="home-close-btn"
          icon={faClose}
        ></FontAwesomeIcon>
      </div>
      <Searchbar
        countries={countries}
        setIdSelect={setIdSelect}
        setIdEdit={setIdEdit}
        setEditCountry={setEditCountry}
        idselect={idselect}
      />
      {/* <Grid countries={countries} /> */}
      {showModal && (
        <Popup
          setModal={setShowModal}
          countries={countries}
          setCountries={setCountries}
        />
      )}

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

export default Home;

// value on new,delete and item div tag
