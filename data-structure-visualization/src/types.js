import React, { useEffect, useState, useRef } from "react";
import InputForm from './input';

const typeList = ["array", "linked list", "binary tree"];
const TypeBtn = () => {
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState(typeList[0]);
  const allTypeBtn = useRef(null)
  if (typeList.length > types.length) {
    setTypes(typeList);
  }
  const clickBtn = (e) => {
    setCurrentType(e.target.getAttribute('id'));
    activateBtn();
  }
  const activateBtn = () => {
    allTypeBtn.current.childNodes.forEach((btn) => {
      if (btn.getAttribute("id") === currentType) {
        btn.classList.add("activatedBtn");
      } else {
        btn.classList.remove("activatedBtn");
      }
    });
  };
  useEffect(() => activateBtn(), [currentType]);
  return (
    <>
      <div className="typeBtns" ref={allTypeBtn} data-current_type={currentType}>
        {types.map((type) => {
          return (
            <button
              id={type}
              key={type}
              className="typeBtn"
              onClick={clickBtn}
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
