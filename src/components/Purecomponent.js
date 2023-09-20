import React from 'react';
import '../assets/styles/style.css';
const username = (props)=>{
    console.log("rendered",props)
    return(
        <div class="row">
            <div class= "col-lg-12">
            <h2 class="text-warning text-center">Welcome {props.username}</h2>
            </div>
        </div>
    )
}
const Purecomponent1= React.memo(username);
export default Purecomponent1;
Purecomponent1.defaultProps = {// setting default prop 
    username:"xyz"
}