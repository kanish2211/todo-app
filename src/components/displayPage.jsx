import React, { useContext } from "react";
import "../App.css"
import {useEffect, useState} from 'react';
import WindowSizeContext from "../context/windowSizeContext";
import WindowResize from "./windowResize";

const DisplayPage=()=>{

//   const [windowSize, setWindowSize] = useState(getWindowSize());
  WindowResize();
  const windowHeight=useContext(WindowSizeContext)[1]
  const windowWidth=useContext(WindowSizeContext)[0]

  const heightNeeded=windowHeight/2;
  const widthNeeded=windowWidth/2;
  const TwoListStyle={
    gridTemplateRows:`${heightNeeded}px ${heightNeeded}2px`,

  }
  const DisplayPageStyle={
    gridTemplateColumns:`${widthNeeded}px ${widthNeeded}2px`,

  }
  

    return(
        <div className="DisplayPage" style={DisplayPageStyle}>
            <div className="inputTodoStyle">
                <h1 style={{textAlign:"center"}}>ADD YOUR TODOS</h1>
                <div className="todoInput">
                    <p>jjjj</p>
                    <input type={"text"} placeholder="Enter your Todos here" value={""} name="todo" className="input"></input>
                </div>
            </div>
            <div className="TwoLists" style={TwoListStyle}>
                <div className="list">i am undone {windowHeight}</div>
                <div className="list">i am done</div>
            </div>
            
        </div>
    )
}
export default DisplayPage

