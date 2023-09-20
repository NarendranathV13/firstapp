import React, {useCallback, useState} from 'react'
import NumList from './NumList';

const Usecallback_new = () =>{
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState ("Before");
    const getNum = useCallback(() => {
        return [num, num+1,num+2]
    },[num])
    const changeTitle = () =>{
        setTitle(prevTitle => (prevTitle === "Before" ? "After" : "Before"));
    }
    return(
        <div class="row">
            <div class="col-lg-12">
                <h1 class= "text-center text-bg-warning p-4 rounded-4 mt-3 mb-4">UseCallback hook {title}</h1>
                <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
                <button class="btn btn-primary " onClick={changeTitle}>Change title</button>
                <NumList getNum={getNum} />
            </div>
        </div>
    )
}
export default Usecallback_new