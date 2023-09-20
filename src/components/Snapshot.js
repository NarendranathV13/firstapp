import React from 'react';
import '../assets/styles/style.css';
class Snapshot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 2000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }
    render() {
        return (
            <div class="row">
                <div class="col-lg-12">
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <div id="div1"></div>
                </div>

            </div>
        );
    }
}
export default Snapshot;