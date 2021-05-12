import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import App from './App';
import Card from './Cards';
import Sdata from './Adata';


function ncard (val,index,arr) {

  console.log(val);
  return (

    <Card
    imgsrc={val.imgsrc}
     title={val.title}
    sname={val.sname}
    link={val.link}   />
  )
 

}
 
// console.log(Sdata[0].sname);

ReactDOM.render(
  <>
    <h1 className='heading' >List of Top 5 Netflix Series</h1>
    {Sdata.map(ncard)}
  </>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
