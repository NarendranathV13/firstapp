import React, { useState, useCallback } from 'react';
import '../assets/styles/style.css';
import Count from "./callback_comps/Count";
import Title from "./callback_comps/Title";
const Usecallback = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback( () => {
        setAge(age + 1);
    },[age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary]);
    
    return (
        <div class="mt-5">
            <hr></hr>
            <Title />
            <Count text="age" count={age} />
            <button class="btn btn-warning mt-2 mx-2" onClick={incrementAge}> Increment my age </button>
            <Count text="salary" count={salary} />
            <button class="btn btn-warning mt-2 mx-2" onClick={incrementSalary}>Increment my salary</button>
        </div>
    );
}
export default Usecallback;