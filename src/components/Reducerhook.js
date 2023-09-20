import React, { useReducer,useRef } from 'react';
import '../assets/styles/style.css';
const reducer = (state, action) => {
    switch (action.type) {
        case "Deposite":
            return state + action.amount
        case "Withdraw":
            return state - action.amount
    }
}
const Reducerhook = () => {
    const [state, dispatch] = useReducer(reducer, 1000);
    const amountRef = useRef(null)
    const deposite = () => {
        const amt = parseFloat(amountRef.current.value);
        dispatch({ type: "Deposite", amount: amt });
        amountRef.current.value = '';
    }
    const withdraw = () => {
        const amt = parseFloat(amountRef.current.value);
        dispatch({ type: "Withdraw", amount: amt })
        amountRef.current.value = '';
    }
    return (
        <div class="row bg-info  p-5 rounded-3">
            <div class="col-lg-12">
                <h1 class="text-center">useReducer</h1>
                <input type="text" class="form-control" ref={amountRef} placeholder="amount" />
                <button type="button" onClick={deposite} class="btn btn-success mt-2 mx-2"  >deposite</button>
                <button type="button" onClick={withdraw} class="btn btn-danger mt-2 mx-2"  >withdraw</button>
                <h1 class="text-center text-bg-light mt-2 ">{`Balance amount is  ${state}`}</h1>
            </div>
        </div>
    )
}
export default Reducerhook