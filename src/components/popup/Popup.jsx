import { useState } from "react";
import "./popup.css";

function Popup({ setModal, countries, setCountries }) {
  const [dataInput, setDataInput] = useState("New_Country");

  function addData(e) {
    setDataInput(e.target.value);
  }

  function closeModal() {
    setModal(false);
  }

  function sendData() {
    // setCountry(dataInput);
    setCountries([
      ...countries,
      {
        key: countries.length + 1,
        image: require("../../assets/planet-earth.png"),
        country: dataInput,
      },
    ]);

    setModal(false);
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="top-grp">
          <h4>Add Country</h4>
          <button className="modal-btn" onClick={closeModal}>
            close
          </button>
        </div>
        <input value={dataInput} onChange={addData}></input>
        <button className="modal-btn add" onClick={sendData}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Popup;
