import React from 'react';
import '../assets/styles/style.css';
class Willmount extends React.Component {
    constructor(){
        super();
        this.state={
            title1:"initial title"
        };
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                title1: "title after update"
            });
        }, 2000); 
    }
    render(){
        return(
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="text-center text-warning">{this.state.title1}</h3>
                </div>
            </div>
        )
    }
}
export default Willmount;