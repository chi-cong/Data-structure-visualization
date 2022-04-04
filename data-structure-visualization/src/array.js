import { useState, useRef } from 'react';



const Array = ({checker}) => {
  const actions = ['Adding', 'Deleting'];
  const [currentAct, setCurrentAct] = useState(actions[0]);
  const [rightInput, setRightInput] = useState();
  const selectElement = useRef(null)
  const actionForm = useRef(null)
  const changeAction = () => {
    setCurrentAct(selectElement.current.value);
  }
  const doAction = (e) => {
    e.preventDefault() 
  }
  const handleInput = (e) => {
    setRightInput(checker(e.target.value));
  }
  return (
    <div className="inputForm">
      <div className="method_choosing">
        <span className="method_title">methods</span>
        <select id="methods" ref={selectElement} onChange={changeAction}>
          {actions.map((action) => {
            return [<option key = "whatever" value={action}>{action}</option>]
          })}
        </select>
      </div>
      <div className="action">
        <form className="action_form" ref={actionForm} onSubmit={doAction}>
          <span className="action_title">{`${currentAct} value`}</span>
          <input type="text" onChange={handleInput}/>
          <button type="submit" className="action_btn" >
            Do it 
          </button>
        </form>
      </div>
      {rightInput && <p>Input value is not correct</p>}
      <div className="note">
        <h2>*note :</h2>
        <p>pls do not put something longer than 2 characters</p>
      </div>
    </div>
  );
}

export default Array;