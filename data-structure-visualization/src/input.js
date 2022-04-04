import Array from "./array";

const InputForm = ({ currentType }) => {
  const checkingInput = (value) => {
    if (value.length <= 2) return true
    else return false;
  }

  if (currentType === "array") {
    return <Array checker={checkingInput}  ></Array>;
  } else if (currentType === "linked list") {
    return <h1>this is linked list</h1>;
  } else if (currentType === "binary tree") {
    return <h1>this is binary tree</h1>;
  }
};
export default InputForm;
