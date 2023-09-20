import React from 'react';
import '../assets/styles/style.css';
class Shouldupdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: "not changed" };
    }
    shouldComponentUpdate(props) {
        console.log("shouldcomp")
        if(props.permission==true){
            return true;
        }else{
            return false;
        }
    }
    changeMsg = () => {
        this.setState({ msg: "changed" });
    }
    render() {
        return (
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-info text-center">Message is {this.state.msg}</h1>
                    <button type="button" class="btn btn-warning mt-2 mb-2 rounded-4" onClick={this.changeMsg}>Change message</button>
                </div>
            </div>

        );
    }
}
export default Shouldupdate;