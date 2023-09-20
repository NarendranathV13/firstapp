import React from 'react';
import '../assets/styles/style.css';
const Listli = (props)=>{
    return(
        <li class="list-group-item">{props.place}</li>
    );
}
export default Listli;