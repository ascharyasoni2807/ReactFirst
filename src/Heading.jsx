import React from 'react';
// import ReactDom from 'react-dom';

const cssStyle = {
    color:''
  
  };
  const flname = 'Ascharya';
  let  currDate =new Date();
   currDate =  currDate.getHours();  
  let greet =' ';
   if (currDate>=1 && currDate <12 ){
    greet='Good Morning';
    cssStyle.color='green'
   }else if (currDate >= 12 && currDate <19 ) {
    greet = 'Good AfterNoon';
    cssStyle.color = 'orange'
   }else {
    greet = 'Good Night';
    cssStyle.color='Violet'
   }
  

function Heading() {

  return <h1 className='heading'>Hello {flname} ,<span style = {cssStyle}>{greet}</span> </h1>




}


export default Heading;