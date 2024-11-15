import React, { useState } from 'react'

export default function Buttons() {

    let [value, setvalue] = useState('');

    const calculatehandle = (e) => {
        setvalue(value + e.target.innerText); 
    }

    const equalhandle = () => {
        setvalue(eval(value));
    }

    const achandle = () => {
        setvalue('');
    }
    const delhandle = () => {
        
        setvalue(value.toString().slice(0, -1));
    }

  return (
    <>
    <div className="input-container">
        <input type="text" name="cal" value={value}  className="input" />
      </div>
    
    <div className="cal-buttons-container">
    <div className="row">
      <button className="btn" onClick={achandle}>AC</button>
      <button className="btn" onClick={delhandle}>DEL</button>
      <button className="btn" onClick={calculatehandle}>%</button>
      <button className="btn" onClick={calculatehandle}>/</button>
    </div>
    <div className="row">
      <button className="btn" onClick={calculatehandle}>7</button>
      <button className="btn" onClick={calculatehandle}>8</button>
      <button className="btn" onClick={calculatehandle}>9</button>
      <button className="btn" onClick={calculatehandle}>*</button>
    </div>
    <div className="row">
      <button className="btn" onClick={calculatehandle}>4</button>
      <button className="btn" onClick={calculatehandle}>5</button>
      <button className="btn" onClick={calculatehandle}>6</button>
      <button className="btn" onClick={calculatehandle}>-</button>
    </div>
    <div className="row">
      <button className="btn" onClick={calculatehandle}>1</button>
      <button className="btn" onClick={calculatehandle}>2</button>
      <button className="btn" onClick={calculatehandle}>3</button>
      <button className="btn" onClick={calculatehandle}>+</button>
    </div>
    <div className="row">
      <button className="btn" onClick={calculatehandle}>00</button>
      <button className="btn" onClick={calculatehandle}>0</button>
      <button className="btn" onClick={calculatehandle}>.</button>
      <button className="btn equal" onClick={equalhandle}>=</button>
    </div>
  </div>
  </>
  )
}
