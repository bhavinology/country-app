import "./grid.css";
import Input from "../input/Input";

function Grid({ countries, setIdSelect, setIdEdit, setEditCountry, idselect }) {
  const gridItems = [];

  for (let i = 0; i < 48; i++) {
    gridItems.push(<div key={i} className="item" />);
  }

  function selectItem(e) {
    e.stopPropagation();
    let id;
    const gridItem = document.querySelectorAll(".item");
    for (let i = 0; i < gridItem.length; i++) {
      console.log("for loop in grid");
      console.log(gridItem[i].classList);

      if (gridItem[i].classList.contains("active")) {
        console.log("bl in loop");
        gridItem[i].classList.remove("active");
      }
    }

    if (e.currentTarget.className.includes("active")) {
      console.log("if runs");
      id = 0;
      e.currentTarget.classList.remove("active");
    } else {
      console.log("else runs");
      id = e.currentTarget.id;
      e.currentTarget.classList.add("active");
    }

    console.log("selected item", id);
    setIdSelect(id);
  }
  const blockCount = 48;
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <div
        key={Number(countries.length + 1)}
        onClick={selectItem}
        className="item"
      >
        <div className="content">
          {/* <img src="../../assets/planet-earth.png" alt="country" /> */}
        </div>
      </div>
    );
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
      <div className="container">
        {cells}
        {blocks}
      </div>
    </div>
  );
}

export default Grid;
