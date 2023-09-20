import React from 'react';
import '../assets/styles/style.css';
class Willupdate extends React.Component {
    constructor(){
        super();
        this.state={
            count:2,
            count1:0
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if(nextState.count1 == this.state.count){
            document.getElementById("willUpdate").innerHTML ="Will mount is called. count1 is "+this.state.count1;
        }
        else if(nextState.count1 > this.state.count){
            document.getElementById("willUpdate").innerHTML ="Will mount is called. count1 is "+this.state.count1;
        }
        console.log("no");
      }
    
      handleClick = () => {
        this.setState(preState => ({
          count1: preState.count1 + 1,
        }));

      
      };
    
      render() {
          //check point for Error boundry
          if (this.state.count1 === 5) {
            throw new Error('Count reached 5!');
          }
        return (
          <div class="row">
            <div class="col-lg-12">
            <p>Count: {this.state.count1}</p>
            <button onClick={this.handleClick}>Increment Count</button>
            <p class="text-bg-info " id="willUpdate"></p>
            </div>
            
          </div>
        );
      }
    }
export default Willupdate;