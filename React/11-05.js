//writing a function app where I am returning a html
//basically functions or classes are said to be components
const app=()=>{
    const a="Dinesh";
    //inorder to use js variables in html u need to write in braces that is JSX.
  return(
    <h1>Hello {a}</h1>
  )
  }
  
  //we must export the function or file because in index.js only execution takes places i.e renedering is happening in index.js
  //there are 2 types of exports :named and default export
  export default app;

//------------------------------------------------------------------------------------------------

  //class based component

//here we must extend React.Component..as we are using React related content so import React

import React, { Component } from "react";
const a="Helluuuu";
class App extends React.Component{
  render(){
    return(
      //here also you can use js variables
      <div>
    <h1>{a} DINESH</h1>
    </div>
    )
    }
}

export default App;

//-------------------------------------------------------------------

//states are used to store data 
//instead of storing data in local varibales i am storing data in state


render(){
  return(
    //here also you can use js variables
    //inorder to use variables in state u should use this.state.property ,this is pointing to current class and state is state of curent pointed class 
    <div>
  <h1>Hello {this.state.name} and age is {this.state.age}</h1>
  </div>
  )
  }

  //props is a method which is used to send state values from one component to other component

  //Test.js
  import React from "react";

class Test extends React.Component{
    render(){
        return(
            //this.props is basically calling other component state 
            <div>
                <center>
                    <h2>Name:{this.props.name} I am from Test component</h2>
                </center>
            </div>
        )
    }
}

export default Test;

//----------------------------------
import React from "react";

//import Test component 
import Test from "./Test";

class App extends React.Component{
  state={
    name:"Dinesh",
    age:21
  }
  render(){
    return(
      //here we are calling Test where it does whatever there in Test.js and 
      //we are sending our state values to other component where it recives
      <div>
    <Test name={this.state.name}/>
    </div>
    )
    }
}

export default App;


output:
Name:Dinesh I am Test Component

//----------------------------------------------------------------------------------------
//type rafce u would get template
//after 16 version we started using hooks

import React,{useState} from 'react'

const App = () => {

//  const [name,setName]=useState('Dinesh');
  //basically name is having value "Dinesh"
  //setName is used to change that state
  // we can pass state object also

  const[data,setData]=useState({
    name:"Leo",
    age:57
  });

   //we can also destructuring so we don't need to use data.name or data.age else directly use name or age
  
   const{name,age}=data;
  return (
    <div>
      <center>
        <h1>Name:{name}</h1>
      </center>
    </div>
  )
}

export default App;

//----------------------------------------------------------------------------------------------------------------------
//props in functions also same as classes

//hooks should n't be used in classes...//hooks are used only for function


//props usage in functions

App.js

//type rafce u would get template
//after 16 version we started using hooks

import React,{useState} from 'react'
import Test from './Test';
const App = () => {

//  const [name,setName]=useState('Dinesh');
  //basically name is having value "Dinesh"
  //setName is used to change that state
  // we can pass state object also

  const[data,setData]=useState({
    name:"Leo",
    age:57
  });
  //we can also destructuring so we don't need to use data.name or data.age else directly use name or age

  const{name,age}=data;

  return (
    <div>
      <center>
        <Test name={name} age={age}/>
      </center>
    </div>
  )
}

export default App;


//--------------------------------------------------------------------------------------------------------
Test.js

import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Test=(props)=>{
        return(
            //this.props is basically calling other component state 
            <div>
                <center>
                    <h2>Name:{props.name} and age:{props.age} I am from Test component</h2>
                </center>
            </div>
        )
}

export default Test;

output:

Name:Leo and age:57 I am from Test component


//----------------------------------------------------------------------

//events and hooks
import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState("");
  return (

    //we are taking input in search bar then we are getting the same what we typed in search bar
    //i.e we are seting the variable setName to the target value we entered, e is the event here like u could consider as element
    <div>
      <center>
        Name:{name}
        <br></br>
        <input type="text" name="name" onChange={(e)=>{
        setName(e.target.value)
        }}/>
      </center>
    </div>
  )
}

export default App