import React,{useEffect, useState} from 'react'

const NumList = ({getNum}) =>{
    const [val,setVal] = useState([]);
    useEffect(() =>{
        setVal(getNum());
        console.log("numlist rendered")
    },[getNum])
    return val.map((i) => <div key={i}>{i}</div>)
}

export default NumList