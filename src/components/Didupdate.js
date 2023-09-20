import React from 'react';
import '../assets/styles/style.css';
class Didupdate extends React.Component {
    constructor(){
        super();
        this.state={
            title1:"initial title didmount"
        };
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                title1: "title rendered after update didmount"
            });
        }, 3000); 
    }
    componentDidUpdate() {
        document.getElementById("didmount").innerHTML =
        "The updated title is " + this.state.title1;
      }
    render(){
        return(
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="text-center text-warning">{this.state.title1}</h3>
                    <h3 class="text-bg-light text-center rounded-3" id="didmount"></h3>
                </div>
            </div>
        )
    }
}
export default Didupdate;