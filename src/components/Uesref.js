import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/style.css';
const Useref = () => {
    const [inputName, setName] = useState("");
    const oldName = useRef("");
  
    useEffect(() => {
      oldName.current = inputName;
    }, [inputName]);
  
    return (
      <>
        <input type="text"  value={inputName}  onChange={(e) => setName(e.target.value)}  class="form-control" placeholder="use ref comp" aria-label="User Name" />
        <h2>Current Value: {inputName}</h2>
        <h2>Previous Value: {oldName.current}</h2>
      </>
    );
  }
export default Useref