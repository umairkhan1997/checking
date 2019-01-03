import React ,{Component} from 'react';
import Counter from './Counter'
class Events extends Component{
    constructor(props){
super(props)
this.state={
counter:0
}
// 2 type on bind
this.incrementCounter=this.incrementCounter.bind(this);
this.decrementCounter=this.decrementCounter.bind(this);

    }
    incrementCounter(){
        console.log("increment")
        // console.log(ev,'ev');
        // console.log(para,'para  ');
        if(this.state.counter<11){
            this.setState({
                counter:this.state.counter+1
            })
        }
        else{
            console.log("You reached maximum");
        }
    }
        decrementCounter(){
            console.log("decrement")
            // console.log(ev,'ev');
            // console.log(para,'para  ');
            if(this.state.counter=== 0){
                console.log("You reached minimum");
            }
            else{
                this.setState({
                    counter:this.state.counter-1
                })
            }
    }
    render(){
        return(
            <div>
                <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} />
                    {/* <h1>Hello World</h1> */}
                    {/* 1 type of binding */}
                    {/* <button onClick={this.incrementCounter.bind(this)}>+</button> */}
                    {/* <span>{this.state.counter}</span> */}
                    {/* 2 type of binding */}
                    {/* <button onClick={this.incrementCounter}>+</button> */}

            </div>
        )
    }
}



export default Events;