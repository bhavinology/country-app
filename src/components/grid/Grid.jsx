import "./grid.css";
import Input from "../input/Input";

function Grid({ countries, setIdSelect, setIdEdit, setEditCountry }) {
  function selectItem(e) {
    e.stopPropagation();
    let id;

    if (e.currentTarget.className.includes("active")) {
      id = 0;
      e.currentTarget.classList.remove("active");
    } else {
      id = e.currentTarget.id;
      e.currentTarget.classList.add("active");
    }
    console.log("selected item", id);
    setIdSelect(id);
  }

  const cells = countries.map((obj) => (
    <div key={obj.key} id={obj.key} onClick={selectItem} className="item">
      <div className="content">
        <img src={obj.image} alt="country" />
      </div>
      <Input obj={obj} setIdEdit={setIdEdit} setEditCountry={setEditCountry} />
    </div>
  ));
  return (
    <div>
      <div className="container">{cells}</div>
    </div>
  );
}

export default Grid;
