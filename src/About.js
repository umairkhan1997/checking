import React, { Component } from 'react';
import './App.js';

export class About2 extends Component{
    cssStyle={
        color:"yellow",
        backgroundColor:'red'
      }
    render()
{
    return (
        <div>
        <input type="text" placeholder="Enter you want"  />
        <button value="add">add</button>
        <a  style={this.cssStyle} href={this.props.link}>{this.props.linkText} </a>
        </div>
    );
}}

export class About1 extends Component{

    render(){
        const csssStyle={
            backgroundColor:'blue',
          }
        return(
            <div>
                    {/* <h1>My first Name {this.props.idData.firstname}</h1> */}
                    <a  style={csssStyle} href={this.props.link}>{this.props.linkText} </a>
            </div>
        );
    }
}

 class About3 extends Component{
    
        render(){
            return(
                <div>
                        <input type="text" placeholder="Enter you want"  />
        <button value="add">add</button> 
                </div>
            );
        }
    }

    export default About3;
