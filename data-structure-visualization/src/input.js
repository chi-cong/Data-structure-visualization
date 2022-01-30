import Array from "./array";

const InputForm = ({ currentType }) => {
  // const [action, setActions] = useState(actions[0]);
  if (currentType === "array") {
  return <Array></Array>;
  } else if (currentType === "linked list") {
    return <h1>this is linked list</h1>;
  } else if (currentType === "binary tree") {
    return <h1>this is binary tree</h1>;
  }
};
export default InputForm;
