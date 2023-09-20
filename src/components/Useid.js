import React, { useId, useState } from 'react';
import '../assets/styles/style.css';
const Useid = () => {
    const id = useId();
    const id2 = useId()
    const [name, setName] = useState();
    const handleSubmit = () => {
        alert("id " + id + "-name : " + name+" id2"+ id2);
    };
    return (
        <div class="row">
                <p>
                    Enter Name :{" "}
                    <input
                        id={id + "-name"}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </p>
                <button type="button" onClick={handleSubmit}> submit</button>
        </div>
    );
}
export default Useid
