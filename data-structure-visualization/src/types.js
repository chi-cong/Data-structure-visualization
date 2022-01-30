import React, { useEffect, useState } from "react";
import InputForm from './input';

const typeList = ["array", "linked list", "binary tree"];
const TypeBtn = () => {
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState(typeList[0]);
  if (typeList.length > types.length) {
    setTypes(typeList);
  }
  const activateBtn = (type) => {
    const getAllBtn = document.querySelectorAll(".typeBtn");
    setCurrentType(type);
    getAllBtn.forEach((btn) => {
      if (btn.getAttribute("id") === currentType) {
        btn.classList.add("activatedBtn");
      } else {
        btn.classList.remove("activatedBtn");
      }
    });
  };
  useEffect(() => activateBtn(currentType));
  return (
    <>
      <div className="typeBtns" data-current_type={currentType}>
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
      
      <InputForm currentType={currentType} />
    </>
  );
};
export default TypeBtn;
