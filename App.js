import './App.css';
import './index.css';
import TempGauge from './components/TempGauge';
import FlowOne from './components/FlowOne'
import FlowTwo from './components/FlowTwo';
import FlowThree from './components/FlowThree';
import FanSpeed from './components/Fanspeed';
import PumpSpeed from './components/Pumpspeed';
import {useDispatch} from 'react-redux';
import {newMessage} from './features/sensors'

function App() {
  const dispatch = useDispatch();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  return (
    <div className="App"><h2>Pump Demo</h2>
    <button
      onClick={() => {
        dispatch(newMessage({temp: getRandomInt(60), flowrateOne: getRandomInt(20),
        flowrateTwo: getRandomInt(15), flowrateThree: getRandomInt(10), fanspeed: getRandomInt(100),
        pumpspeed: getRandomInt(100)}))
      }}> Fake = Receive data from NodeRed</button>
      <div>
        <div className="grid-container">
        <div className="grid-item"><TempGauge /></div>
        <div className="grid-item"><FanSpeed /></div>
        <div className="grid-item"><PumpSpeed /></div>
        <div className="grid-item"><FlowOne /></div>
        <div className="grid-item"><FlowTwo /></div>
        <div className="grid-item"><FlowThree /></div>
      </div>
    </div>
  </div>
  );
}
 
export default App;
