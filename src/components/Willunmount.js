import React from 'react';
import '../assets/styles/style.css';
class Willunmount extends React.Component {
    componentWillUnmount(){
        console.log("Component is deleted")
    }
    render(){
        return (
            <h1 class="text-center text-bg-warning rounded-3 mt-3 mb-3">Component will be deleted</h1>
        )
    }
}
export default Willunmount