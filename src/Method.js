import React ,{Component} from 'react';
import './App.js';




class Method extends Component{
    myName(){
        return "Umair"  
    }
    
    functionId(){
        return "https://google.com.pk"
    }
render(){
    return(
        <div> <p>My link here : <a href={this.functionId()}>{this.myName()} </a></p> </div>
    );
}

}
export default Method;