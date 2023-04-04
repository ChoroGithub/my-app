import './App.css';
import React, {useState} from "react";
import { initializeApp } from "firebase/app";
// firebase.initializeApp({

// // Your web app's Firebase configuration

//   apiKey: "AIzaSyCBqOd2nDaDhTEDuUxiBwahWw0SjkuW7_I",
//   authDomain: "ringkernspeicher.firebaseapp.com",
//   projectId: "ringkernspeicher",
//   storageBucket: "ringkernspeicher.appspot.com",
//   messagingSenderId: "689786501639",
//   appId: "1:689786501639:web:305f7bc2677798f67388a2"

// })
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBqOd2nDaDhTEDuUxiBwahWw0SjkuW7_I",
  authDomain: "ringkernspeicher.firebaseapp.com",
  projectId: "ringkernspeicher",
  storageBucket: "ringkernspeicher.appspot.com",
  messagingSenderId: "689786501639",
  appId: "1:689786501639:web:305f7bc2677798f67388a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let i = 0;
let j = 0;


const App = () => {

  //hor lines
  const [lineGH, setStyleLineGH] = useState("lineRInv");
  const [lineGHA, setStyleLineGHA] = useState("lineRInv");
  const [lineGH2, setStyleLine2GH] = useState("lineRInv");
  const [lineGHA2, setStyleLineGHA2] = useState("lineRInv");
  const [lineGH3, setStyleLine3GH] = useState("lineRInv");
  const [lineGHA3, setStyleLineGHA3] = useState("lineRInv");
  const [lineGH4, setStyleLine4GH] = useState("lineRInv");
  const [lineGHA4, setStyleLineGHA4] = useState("lineRInv");


  //vert lines
  const [lineOV, setStyleLineOV] = useState("lineRInv1");
  const [lineOVA, setStyleLineOVA] = useState("lineRInv1");
  const [lineOV2, setStyleLine2OV] = useState("lineRInv");
  const [lineOVA2, setStyleLineOVA2] = useState("lineRInv1");
  const [lineOV3, setStyleLine3OV] = useState("lineRInv");
  const [lineOVA3, setStyleLineOVA3] = useState("lineRInv1");
  const [lineOV4, setStyleLine4OV] = useState("lineRInv");
  const [lineOVA4, setStyleLineOVA4] = useState("lineRInv1");

  //circles
  const [circleB, setStyleCyrB] = useState("circleBInv");
  const [circleR11, setStyle11] = useState("circleBInv");
  const [circleR12, setStyle12] = useState("circleBInv");
  const [circleR13, setStyle13] = useState("circleBInv");
  const [circleR14, setStyle14] = useState("circleBInv");
  const [circleR21, setStyle21] = useState("circleBInv");
  const [circleR22, setStyle22] = useState("circleBInv");
  const [circleR23, setStyle23] = useState("circleBInv");
  const [circleR24, setStyle24] = useState("circleBInv");
  const [circleR31, setStyle31] = useState("circleBInv");
  const [circleR32, setStyle32] = useState("circleBInv");
  const [circleR33, setStyle33] = useState("circleBInv");
  const [circleR34, setStyle34] = useState("circleBInv");
  const [circleR41, setStyle41] = useState("circleBInv");
  const [circleR42, setStyle42] = useState("circleBInv");
  const [circleR43, setStyle43] = useState("circleBInv");
  const [circleR44, setStyle44] = useState("circleBInv");


  //x,y
  const [nameX, setNameX] = useState(0);
  const [nameY, setNameY] = useState(0);


  let x = [1,2,3,4];
  let y = [1,2,3,4];
  function resetStyle() {
    setStyle11("circleBInv");
    setStyle12("circleBInv");
    setStyle13("circleBInv");
    setStyle14("circleBInv");
    setStyle21("circleBInv");
    setStyle22("circleBInv");
    setStyle23("circleBInv");
    setStyle24("circleBInv");
    setStyle31("circleBInv");
    setStyle32("circleBInv");
    setStyle33("circleBInv");
    setStyle34("circleBInv");
    setStyle41("circleBInv");
    setStyle42("circleBInv");
    setStyle43("circleBInv");
    setStyle44("circleBInv");
  }
  //set circle at crossings
  var at = {
    at_11: function() {
      if(circleR11 === "circleBInv"){
        setStyle11("circleR11");
      }
      else {
        setStyle11("circleBInv")
      }
     },
    at_12: function() {
      if(circleR12 === "circleBInv"){
        setStyle12("circleR12");
        
      }
      else {
        setStyle12("circleBInv")
      }
     },
     at_13: function() {
      if(circleR13 === "circleBInv"){
        setStyle13("circleR13");
        
      }
      else {
        setStyle13("circleBInv")
      }
     },

     at_14: function() {
      if(circleR14 === "circleBInv"){
        setStyle14("circleR14");
        
      }
      else {
        setStyle14("circleBInv")
      }
     },
     at_21: function() {
      if(circleR21 === "circleBInv"){
        setStyle21("circleR21");
      }
      else {
        setStyle21("circleBInv")
      }
     },
    at_22: function() {
      if(circleR22 === "circleBInv"){
        setStyle22("circleR22");
      }
      else {
        setStyle22("circleBInv")
      }
     },
     at_23: function() {
      if(circleR23 === "circleBInv"){
        setStyle23("circleR23");
      }
      else {
        setStyle23("circleBInv")
      }
     },
     at_24: function() {
      if(circleR24 === "circleBInv"){
        setStyle24("circleR24");
      }
      else {
        setStyle24("circleBInv")
      }
     },
     at_31: function() {
      if(circleR31 === "circleBInv"){
        setStyle31("circleR31");
      }
      else {
        setStyle31("circleBInv")
      }
     },
    at_32: function() {
      if(circleR32 === "circleBInv"){
        setStyle32("circleR32");
      }
      else {
        setStyle32("circleBInv")
      }
     },
     at_33: function() {
      if(circleR33 === "circleBInv"){
        setStyle33("circleR33");
      }
      else {
        setStyle33("circleBInv")
      }
     },
     at_34: function() {
      if(circleR34 === "circleBInv"){
        setStyle34("circleR34");
      }
      else {
        setStyle34("circleBInv")
      }
     },
     at_41: function() {
      if(circleR41 === "circleBInv"){
        setStyle41("circleR41");
      }
      else {
        setStyle41("circleBInv")
      }
     },
     at_42: function() {
      if(circleR42 === "circleBInv"){
        setStyle42("circleR42");
      }
      else {
        setStyle42("circleBInv")
      }
     },
     at_43: function() {
      if(circleR43 === "circleBInv"){
        setStyle43("circleR43");
      }
      else {
        setStyle43("circleBInv")
      }
     },
     at_44: function() {
      if(circleR44 === "circleBInv"){
        setStyle44("circleR44");
      }
      else {
        setStyle44("circleBInv")
      }
     },
  };
  
  //horizontal
  const changeStyleLineGH = () => {


    if(i === x.length) {
      console.log("if")
      i=1;
      
      setStyleLineGH("lineR");
      setStyleLineGHA("long-arrow-left")
      setStyleLine2GH("lineRInv");
      setStyleLineGHA2("lineRInv");
      setStyleLine3GH("lineRInv");
      setStyleLineGHA3("lineRInv");
      setStyleLine4GH("lineRInv");
      setStyleLineGHA4("lineRInv");
    } else {
      i++;
      if(i===1){
        //setStyleLineGH("lineR")
        
        setStyleLineGH("lineR");
        setStyleLineGHA("long-arrow-left")
        setStyleLine2GH("lineRInv");
        setStyleLineGHA2("lineRInv");
        setStyleLine3GH("lineRInv");
        setStyleLineGHA3("lineRInv");
        setStyleLine4GH("lineRInv");
        setStyleLineGHA4("lineRInv");
      }
      else if(i===2) {
        
        setStyleLineGH("lineRInv");
        setStyleLineGHA("lineRInv");
        setStyleLine2GH("lineR");
        setStyleLineGHA2("long-arrow-left");
        setStyleLine3GH("lineRInv");
        setStyleLineGHA3("lineRInv");
        setStyleLine4GH("lineRInv");
        setStyleLineGHA4("lineRInv");
      } else if (i===3) {
        setStyleLineGH("lineRInv")
        setStyleLineGHA("lineRInv")
        setStyleLine2GH("lineRInv");
        setStyleLineGHA2("lineRInv")
        setStyleLine3GH("lineR");
        setStyleLineGHA3("long-arrow-left")
        setStyleLine4GH("lineRInv");
        setStyleLineGHA4("lineRInv")

      } else if (i===4) {
        setStyleLineGH("lineRInv")
        setStyleLineGHA("lineRInv")
        setStyleLine2GH("lineRInv");
        setStyleLineGHA2("lineRInv");
        setStyleLine3GH("lineRInv");
        setStyleLineGHA3("lineRInv");
        setStyleLine4GH("lineR");
        setStyleLineGHA4("long-arrow-left");
      }
    }
    setNameX(i);
    resetStyle();
    at['at_' + i + j]();
  };

  //vertical
  const changeStyleLineOV = () => {

    if(j === y.length) {
      j=1;
      setStyleLineOV("lineOV");
      setStyleLineOVA("long-arrow-up");
      setStyleLine2OV("lineRInv1");
      setStyleLineOVA2("lineRInv1");
      setStyleLine3OV("lineRInv1");
      setStyleLineOVA3("lineRInv1");
      setStyleLine4OV("lineRInv1");
      setStyleLineOVA4("lineRInv1");
    } else {
      j++;
      if(j===1) {
        setStyleLineOV("lineOV");
        setStyleLineOVA("long-arrow-up");
        setStyleLine2OV("lineRInv1");
        setStyleLineOVA2("lineRInv1");
        setStyleLine3OV("lineRInv1");
        setStyleLineOVA3("lineRInv1");
        setStyleLine4OV("lineRInv1");
        setStyleLineOVA4("lineRInv1");
      }
      else if(j===2) {
        setStyleLineOV("lineRInv1");
        setStyleLineOVA("lineRInv1");
        setStyleLine2OV("lineOV");
        setStyleLineOVA2("long-arrow-up");
        setStyleLine3OV("lineRInv1");
        setStyleLineOVA3("lineRInv1");
        setStyleLine4OV("lineRInv1");
        setStyleLineOVA4("lineRInv1");
      } else if (j===3) {
        setStyleLineOV("lineRInv1");
        setStyleLineOVA("lineRInv1");
        setStyleLine2OV("lineRInv1");
        setStyleLineOVA2("lineRInv1");
        setStyleLine3OV("lineOV");
        setStyleLineOVA3("long-arrow-up");
        setStyleLine4OV("lineRInv1");
        setStyleLineOVA4("lineRInv1");

      } else if (j===4) {
        setStyleLineOV("lineRInv1");
        setStyleLineOVA("lineRInv1");
        setStyleLine2OV("lineRInv1");
        setStyleLineOVA2("lineRInv1");
        setStyleLine3OV("lineRInv1");
        setStyleLineOVA3("lineRInv1");
        setStyleLine4OV("lineOV");
        setStyleLineOVA4("long-arrow-up");
      }
    }
    setNameY(j);
    resetStyle();
    at['at_' + i + j]();
  };

  const changeStyleCyrB = () => {
    
    if(circleB === "circleBInv"){
      setStyleCyrB("circleB");
    }
    else {
      setStyleCyrB("circleBInv")
    }
    
  };


  return (
    <>
      <div className='buttonContainer'>
        <button className="button" onClick={changeStyleLineGH}>
          Change Horizontal
        </button>

        <button className="button" onClick={changeStyleLineOV}>
          Change Vertical
        </button>

        
      </div>
      

      
      <div className="globalContainer">
        <div className='placeholder'>

        </div>
        <div className="XAxis">
          
          <div>
            x<sub>1</sub>
          </div>
          <div>
            x<sub>2</sub>
          </div>
          <div>
            x<sub>3</sub>
          </div>
          <div>
            x<sub>4</sub>
          </div>
          
        </div>
        
        <div className='YAxis'>
          <div>
            y<sub>1</sub>
          </div>
          <div>
            y<sub>2</sub>
          </div>
          <div>
            y<sub>3</sub>
          </div>
          <div>
            y<sub>4</sub>
          </div>
        </div>

        <div className="App">
        
          <div className="container">
            <div className='lineH'></div>
            <div className='lineV'></div>
            <div className="circle"></div>
            <div className={lineGHA}></div>
            <div className={circleB}></div>
            <div className={lineOVA}></div>
            <div className={circleR11}></div>
            
          </div>
          <div className="container"> 
            <div className='lineV'></div>
            <div className="circle"></div>
            <div className={lineGH}></div>
            <div className={lineOVA2}></div>
            <div className={circleB}></div>
            <div className={circleR12}></div>
          </div>
          <div className="container">
            <div className='lineV'></div>
            <div className="circle"></div>
            <div className={lineGH}></div>
            <div className={circleB}></div>
            <div className={lineOVA3}></div>
            <div className={circleR13}></div>
          </div>
          <div className="container">
            <div className='lineV'></div>
            <div className="circle"></div>
            <div className={lineGH}></div>
            <div className={circleB}></div>
            <div className={lineOVA4}></div>
            <div className={circleR14}></div>
          </div>

          <div className="container">
            <div className='lineH'></div>
            <div className="circle"></div>
            <div className={lineGHA2}></div>
            <div className={circleB}></div>
            <div className={lineOV}></div>
            <div className={circleR21}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH2}></div>
            <div className={lineOV2}></div>
            <div className={circleB}></div>
            <div className={circleR22}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH2}></div>
            <div className={circleB}></div>
            <div className={lineOV3}></div>
            <div className={circleR23}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH2}></div>
            <div className={circleB}></div>
            <div className={lineOV4}></div>
            <div className={circleR24}></div>
          </div>

          <div className="container">
            <div className='lineH'></div>
            <div className="circle"></div>
            <div className={lineGHA3}></div>
            <div className={circleB}></div>
            <div className={lineOV}></div>
            <div className={circleR31}></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className={lineGH3}></div>
            <div className={lineOV2}></div>
            <div className={circleB}></div>
            <div className={circleR32}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH3}></div>
            <div className={circleB}></div>
            <div className={lineOV3}></div>
            <div className={circleR33}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH3}></div>
            <div className={circleB}></div>
            <div className={lineOV4}></div>
            <div className={circleR34}></div>
          </div>

          <div className="container">
            <div className='lineH'></div>
            <div className="circle"></div>
            <div className={lineGHA4}></div>
            <div className={circleB}></div>
            <div className={lineOV}></div>
            <div className={circleR41}></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className={lineGH4}></div>
            <div className={circleB}></div>
            <div className={lineOV2}></div>
            <div className={circleR42}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH4}></div>
            <div className={circleB}></div>
            <div className={lineOV3}></div>
            <div className={circleR43}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={lineGH4}></div>
            <div className={circleB}></div>
            <div className={lineOV4}></div>
            <div className={circleR44}></div>
          </div>
        
        </div>


        
        
        
        
      </div>
      <div className='activeContainer'>
        <div className='active'>
          <h1>Activ: x<sub>{nameX}</sub>y<sub>{nameY}</sub></h1>
        </div>
        <div className="buttonAH">
          <button className="buttonA" onClick={changeStyleCyrB}>
            Activate All
          </button>
        </div>
      </div>
      
    </>
  );
}

export default App;
