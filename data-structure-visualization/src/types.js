import React, { useEffect, useState } from "react";

const typeList = ["array", "linked list"];
const TypeBtn = () => {
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState(typeList[0]);
  if (typeList.length > types.length) {
    setTypes(typeList);
  }
  useEffect(() => {
    const getRoot = document.getElementById("root");
  }, []);
  const activateBtn = (type) => {
    const getAllBtn = getRoot.querySelectorAll(".typeBtn");
    setCurrentType(type);
    getAllBtn.forEach((btn) => {
      if (btn.getAttribute === currentType) {
        btn.classList.add("activatedBtn");
      } else {
        btn.classList.remove("activatedBtn");
      }
    });
  };
  return (
    <div className="typeBtns">
      {types.map((type) => {
        return (
          <button
            id={type}
            key={type}
            className="typeBtn"
            onClick={() => activateBtn(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};
export default TypeBtn;
