import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Toggle } from "carbon-components-react";
import { Slider } from "carbon-components-react";

function PumpFanValveStates(props) {

    //const [toggled, setToggled] = useState(false)
    const sensors = useSelector((state) => state.sensors.value);
    if (sensors !== 'undefined') {
        var pumpState = sensors.pumpState
        var location = sensors.location
        var id = sensors.id
        var fanState = sensors.fanState
        var drainState = sensors.drainStateValve
        //var safetyState = sensors.safetyStateValve
        var fanSpeed = sensors.fanSpeed
        var pumpSpeed = sensors.pumpSpeed
    } 

    const [value, setValue] = useState(pumpSpeed);
    //const [globalFanSpeed, setGlobalFanSpeed] = useState(fanSpeed);
    const [globalDrainValue, setGlobalDrainValue] = useState(0);

    
    const handlePumpChange = (e) => {
        console.log("handle Pump change: %s", e.value);
        //setValue(e.value);
        props.changePumpSpeed(value);
    }

    const handleFanChange = (e) => {
        console.log("handle Fan change: %s", e.fanSpeed);
        //setGlobalFanSpeed(e.fanSpeed);
        props.changeFanSpeed(e.fanSpeed);
    }

    const handleFlushChange = (e) => {
        console.log("handle Flush change: %s", e.drainValue);
        //setGlobalDrainValue(e.drainValue);
        props.changePumpSpeed(globalDrainValue);
    }

    return(
        <h3>Location:&nbsp;{location}&nbsp;&nbsp;&nbsp;Id&nbsp;:&nbsp;{id}&nbsp;&nbsp;
        <br></br><br></br>
        <div className="grid-container">
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-1"
                labelText="Pump"
                onToggle={(Toggle) => props.changePumpToggleState(Toggle)}
            /></div>
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-2"
                labelText="Fan"
                onToggle={(Toggle) => props.changeFanToggleState(Toggle)}
            /></div>          
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-3"
                labelText="Flush"
                onToggle={(Toggle) => props.changeFlushToggleState(Toggle)}
            /></div>
            <div className="grid-item-hdrx">
            <Slider
                ariaLabelInput="1 - 3000"
                id="slider1"
                labelText="Pump Speed r/pm"
                max={3000}
                min={1}
                step={10}
                stepMultiplier={4}
                value={pumpSpeed}
                onChange={handlePumpChange}
            /></div>
            <div className="grid-item-hdrx">
            <Slider
                ariaLabelInput="1 - 1900"
                id="slider2"
                labelText="Fan Speed r/pm"
                max={1900}
                min={1}
                step={5}
                stepMultiplier={4}
                value={fanSpeed}
                onChange={handleFanChange}
            /></div>
             <Slider
                ariaLabelInput="1 - 100"
                id="slider3"
                labelText="Flush"
                max={100}
                min={1}
                step={5}
                stepMultiplier={4}
                value= {0}
                onChange={handleFlushChange}
            />
        </div>
        </h3>
    )};

export default PumpFanValveStates;
