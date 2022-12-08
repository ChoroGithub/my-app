import './App.css';
import React, {useState} from "react";

let i = 1;
const App = () => {

  // const [lineV, setStyleVer] = useState("lineInv");

  // const [lineH, setStyleHor] = useState("lineHInv");

  const [circleRH, setStyleCyrRH] = useState("circleRInv");

  const [circleRH1, setStyleCyrRH1] = useState("circleRInv1");

  const [circleRV, setStyleCyrRV] = useState("circleRInv");

  const [circleRV1, setStyleCyrRV1] = useState("circleRInv1");

  const [circleB, setStyleCyrB] = useState("circleBInv");

  const [name,setName] = useState(1);


  let x = [1,2,3,4];

  const changeStyleCyrRH = () => {
    console.log("you just clicked", circleRH);
    
    if(circleRH == "circleRInv"){
      setStyleCyrRH("circleR");
      
      
    }
    else {
      setStyleCyrRH("circleRInv")
    }

    if(i === x.length) {
      i=1;
    } else {
      i++;
    }
    setName(i);
  };

  const changeStyleCyrRV = () => {
    console.log("you just clicked", circleRV);
    
    if(circleRV == "circleRInv"){
      // setStyleCyrRV("circleR");
      setStyleCyrRV1("circleR1")
    }
    else {
      setStyleCyrRV("circleRInv")
    }
    
  };

  const changeStyleCyrB = () => {
    console.log("you just clicked", circleB);
    
    if(circleB == "circleBInv"){
      setStyleCyrB("circleB");
    }
    else {
      setStyleCyrB("circleBInv")
    }
    
  };


  // const changeStyleVer = () => {
  //   console.log("you just clicked", lineV);
    
  //   if(lineV == "lineInv"){
  //     setStyleVer("line");
  //   }
  //   else {
  //     setStyleVer("lineInv")
  //   }
    
  // };

  // const changeStyleHor = () => {
  //   console.log("you just clicked", lineH);
    
  //   if(lineH == "lineHInv"){
  //     setStyleHor("lineH");
  //   }
  //   else {
  //     setStyleHor("lineHInv")
  //   }
    
  // };

  return (
    <>
      
      <button className="button" onClick={changeStyleCyrRH}>
        Change Horizontal
      </button>

      <button className="button" onClick={changeStyleCyrRV}>
        Change Vertical
      </button>

      <button className="button" onClick={changeStyleCyrB}>
        Activate All
      </button>

      
      <div>
        <div className="App">

          <div className="container">
            <div className="circle"></div>
            <div className={circleRH}></div>
            <div className={circleB}></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className={circleRH}></div>
            <div className={circleRV}></div>
            <div className={circleB}></div>

          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleRH}></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleRH}></div>
            <div className={circleB}></div>
          </div>

          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleRV}></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>

          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className={circleRV}></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>

          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className={circleRV}></div>
            <div className={circleB}></div>
            <div className={circleRV1}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className={circleB}></div>
          </div>
        
        </div>


        {/* <div className="AppV">
          <div className="container">
            <div className="lineInv"></div>
          </div>
          <div className="container">
            <div className={lineV}></div>
            
          </div>
          <div className="container">
            <div className="lineInv"></div>
          </div>
          <div className="container">
            <div className="lineInv"></div>
          </div>


          <div className="container">
            <div className={lineH}></div>
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>





          <div className="container">
            
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>





          <div className="container">
            
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>
          <div className="container">
            
          </div>


        </div> */}


        {/* <div className="AppH">
          <div className="container">
            <div className="lineInv"></div>
          </div>
          <div className="container">
            <div className={lineH}></div>
            
          </div>
          <div className="container">
            <div className="lineInv"></div>
          </div>
          <div className="container">
            <div className="lineInv"></div>
          </div>
        </div> */}

        <h1>{name}</h1>
      </div>



      {/* <div className="App">
        <div className="container">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="container"> 
            <div className="circle"></div>
            <div className="lineH"></div>
          </div>
          <div className="container">
            <div className="circle"></div>
            <div className="triangle"></div>
          </div>
      </div> */}
    </>
  );
}

export default App;
