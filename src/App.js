import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import About3 ,{About1, About2  } from './About';
// import Method from './Method';
// import Clock from './Digitalclock';
// import Practise from './Practise'
// import Events from './Events';
import Form from './Form';

class App extends Component {
// 2 types of using css in react


constructor(){
super() 
this.state={
  firstname:'umair',
  email:"umairkhan@so.com",
  number:23445
}
}
user={
  name:'khan',
  age:29
}
  render() {
    
    return (

<div >
         {/* <About1    idData={this.state} link='https://google.com.pk/' linkText='Google'/>
        <About2  link='https://google.com.pk/' linkText='Google'/>
        <About3 />
        <Method /> */}
        
        {/* <Clock /> */}
        {/* <Events />
        <Practise /> */}
      <Form />
</div>


    );
  }
}

export default App;
