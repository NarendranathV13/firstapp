import React from 'react';
import '../assets/styles/style.css';
class UpdategetDerived extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("called")
        return { favoritecolor: props.favcol };  
    }
    changeColor = () => {
        console.log("blue")
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <div class="row" >
                <div class="col-lg-12">
                    <h1 class="text-center text-bg-warning rounded-3  text-success">Updating Favorite Color is {this.state.favoritecolor}</h1>
                    <button class="btn btn-success mt-2 mb-3 rounded-4 " type="button" onClick={this.changeColor}>Change color</button>
                </div>
            </div>
        );
    }
}
export default UpdategetDerived;