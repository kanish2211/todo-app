import React,{useContext,useEffect} from "react";
import WindowSizeContext from "../context/windowSizeContext";
const WindowResize=()=>{
    const [windowSize, setWindowSize] = useContext(WindowSizeContext);
  setWindowSize(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  console.log(windowSize.innerHeight);

}

export default WindowResize