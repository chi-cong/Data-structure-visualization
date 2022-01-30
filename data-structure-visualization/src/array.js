import {useState, useRef} from 'react';

const Array = () => {
  const actions = ['Adding', 'Deleting'];
  const selectElement = useRef(null)
  const [currentAct, setCurrentAct] = useState(actions[0]);
  const changeAction = () => {
    setCurrentAct(selectElement.current.value);
  }
  const doAction = (e) => {
    e.preventDefault() 
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
        <form className="action_form">
          <span className="action_title">add value</span>
          <input type="text" />
          <button type="submit" className="action_btn" onSubmit={doAction}>
            submit
          </button>
        </form>
      </div>
      <div className="note">
        <h2>*note :</h2>
        <p>pls do not put something longer than 2 characters</p>
      </div>
    </div>
  );
}

export default Array;