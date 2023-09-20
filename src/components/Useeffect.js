import React, { useEffect, useState } from 'react';
import '../assets/styles/style.css';

function Useeffect(){
    const[count, setCount] = useState(0);
    useEffect(()=>{
        document.getElementById("effect").innerHTML=`Use effect is called ${count} time`;
    });
    return(
        <div class="row mt-3 mb-3">
            <div class="col-lg-12">
                <h3 class="text-center text-bg-success rounded-3">count changed to {count}</h3>
            </div>
            <h3 class="text-center text-bg-success rounded-3 mt-3 mb-3" id="effect">count changed to {count}</h3>
            <button type="button" onClick={()=>setCount((count) => count + 1)} class="btn btn-primary">useEffectbtn</button>
        </div>
    )
}
export default Useeffect