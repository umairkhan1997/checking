import React,{Component} from 'react';

class Practise extends Component{
    constructor(){
        super()
            this.state={
                name:'umair',
                email:'umairkhan@gmail.com',
                number:1234567
            }}
            getValue(){
               const vale= document.getElementById('val').value;
               console.log(vale);
               const cretElement=document.createElement('li');
               const t=document.createTextNode(vale)
               cretElement.appendChild(t);
            }
        render(){
            return(
                    <div>
                        <input type="text" id="val"/>
                        <button value="add" onClick={this.getValue.bind(this)} >add</button>
                        <h3>{this.props.cretElement}</h3>
                    </div>
            )
        }
        }
        export default Practise;

            