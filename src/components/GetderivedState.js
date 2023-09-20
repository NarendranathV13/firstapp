import React from 'react';
import '../assets/styles/style.css';
class GetderivedState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        if(props.favcol !==state.favoritecolor){
            return{
                favoritecolor:props.favcol
            };
        }
        else{
            return{
                favoritecolor:"green"
            };
        }
      }
      render() {
        return (
            <div class="row">
                <div class="col-lg-12">
                <h1 class="text-center">Favorite Color is {this.state.favoritecolor}</h1>
                </div>
            </div>
        );
      }
} 
export default GetderivedState;