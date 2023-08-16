import React from 'react';
import logo from "../components/images/download.jfif";

const props =  {
  name: "Milot",
  profession: "Programmer",
  age: 20,
  description: "loremlorem"
}


function Contact() {
  return (
    <div className='card'>
      <img src={logo} alt='logo'/>
      <h1> I'm:  {props.name}</h1>
      <p>I'm a: {props.profession}</p>
      <h2>age {props.age}:</h2>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default Contact
