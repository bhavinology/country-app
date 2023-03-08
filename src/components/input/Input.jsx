import { useState } from "react";
import "./input.css";

function Input({ obj, setIdEdit, setEditCountry }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(obj.country);
  function selectCountry(e) {
    console.log("edit runs");
    setIdEdit(e.currentTarget.id);
    setIsEditing(true);
  }
  function handleEditCountry(e) {
    setEditInput(e.target.value);
  }

  function onkeydownOp(e) {
    e.stopPropagation();
    if (e.key === "Enter") {
      setEditCountry(editInput);
      setIsEditing(false);
      e.target.blur();
    }
  }
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          id={obj.key}
          value={editInput}
          onChange={handleEditCountry}
          onKeyDown={onkeydownOp}
          className="grid-input"
        />
      </>
    );
  } else {
    taskContent = (
      <>
        <div id={obj.key} onClick={selectCountry}>
          {obj.country}
        </div>
      </>
    );
  }
  return <div>{taskContent}</div>;
}

export default Input;
