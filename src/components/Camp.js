import React from 'react';
import '../assets/styles/style.css';
const Camps = (props) => {
    return (
        <div class="col-lg-4">
            <h3 className='text-center text-bg-light p-3 rounded-3 '>{props.title}</h3>
            <img class='campImg' src={props.image} id="camp1" />
        </div>
    );
}
export default Camps;