import logo from './logo.svg';
import './App.css';
import DisplayPage from './components/displayPage';
import WindowSizeContext from './context/windowSizeContext';

function App() {
  return (
    <div>
      <WindowSizeContext.Provider value="712">
      <DisplayPage/>
      </WindowSizeContext.Provider>
      
    </div>
  );
}

export default App;
