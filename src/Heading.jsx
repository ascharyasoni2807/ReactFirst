import React from 'react';
import ReactDom from 'react-dom';

const cssStyle = {
    color:''
  
  };
  const flname = 'Ascharya';
  let  currDate =new Date();
  // const img1= "https://picsum.photos/200/300";
  // const img2= "https://picsum.photos/250/300";
  // const img3= "https://picsum.photos/300/300";
  // const headings= {color:'red' , textAlign : 'center' , fontSize:20 , textTransform : 'capitalize'}
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