import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            allUser:[]
        }
        this.updateForm=this.updateForm.bind(this);
        this.clickHandler=this.clickHandler.bind(this); 
    }
    updateForm(event){
        console.log(this.state.userName)
        this.setState({
    userName:event.target.value        
        })
    }
    clickHandler(event){
        let currentuSer=this.state.allUser;
        currentuSer.push(this.state.userName);
        this.setState({
            allUser:currentuSer,
            userName:''
        })
        console.log(this.state.allUser)
    }
    render(){
        return(
            <div>
                <h1>Hello Form</h1>
                    <input type="text" value={this.state.userName} onChange={this.updateForm} />
                    <button onClick={this.clickHandler}>Save</button>
                    <p>{this.state.userName}</p>
            </div>
        )
    }
}

export default Form;