import React from 'react';
import { useSelector } from 'react-redux';
import { Toggle } from "carbon-components-react";
import { Slider } from "carbon-components-react";
import { useDispatch } from 'react-redux';
import pumpStateToggleReducer from '../features/pumpStateToggle';

function SendToDispatcher(toggledPumpState, newPumpSpeedValue, newFanSpeedValue) {
    const dispatch = useDispatch();
    dispatch(pumpStateToggleReducer({pumpStateValue: toggledPumpState, 
        pumpSpeedValue: newPumpSpeedValue, fanSpeedValue: newFanSpeedValue}));
}

function PumpFanValveStates() {
    
    const sensors = useSelector((state) => state.sensors.value);
    
    if (sensors !== 'undefined') {
        var pumpState = sensors.pumpState
        var location = sensors.location
        var id = sensors.id
        var fanState = sensors.fanState
        var drainState = sensors.drainStateValve
        var safetyState = sensors.safetyStateValve
        var fanSpeed = sensors.fanSpeed
        var pumpSpeed = sensors.pumpSpeed
    } 

    return(
        <h3>Location:&nbsp;{location}&nbsp;&nbsp;&nbsp;Id&nbsp;:&nbsp;{id}&nbsp;&nbsp;
        Fan State: &nbsp;{fanState}&nbsp;&nbsp;Drain valve:&nbsp;{drainState}&nbsp;&nbsp;Safety valve:&nbsp;{safetyState}
        <br></br><br></br>
        <div className="grid-container">
            
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-1"
                labelText="Pump"
                toggled={pumpState}                
                onToggle={Toggle => SendToDispatcher(Toggle)}
            /></div>
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-1"
                labelText="Fan"
                toggled={pumpState}                
                onToggle={Toggle => SendToDispatcher(Toggle)}
            /></div>          
            <div className="grid-item-hdrx"><Toggle 
                aria-label="toggle button"
                id="toggle-1"
                labelText="Flush"
                toggled={pumpState}                
                onToggle={Toggle => SendToDispatcher(Toggle)}
            /></div>
            <div className="grid-item-hdrx">
            <Slider
                ariaLabelInput="1 - 100"
                id="slider"
                labelText="Pump Speed"
                max={100}
                min={1}
                step={5}
                stepMuliplier={4}
                value={pumpSpeed}
            /></div>
            <div className="grid-item-hdrx">
            <Slider
                ariaLabelInput="1 - 100"
                id="slider"
                labelText="Fan Speed"
                max={100}
                min={1}
                step={5}
                stepMultiplier={4}
                value={fanSpeed}
            /></div>
             <Slider
                ariaLabelInput="1 - 100"
                id="slider"
                labelText="Flush"
                max={100}
                min={1}
                step={5}
                stepMultiplier={4}
                value= {0}
            />
        </div>
        </h3>
    )};

export default PumpFanValveStates;
