import React, { useEffect } from 'react';
import '../assets/styles/style.css';
const Username1 = (props) => {
    useEffect(() => console.log("rendered", props))

    return (
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-warning text-center">Welcome {props.username}</h2>
            </div>
        </div>
    )
}
export default Username1;