import React from 'react';
import { GaugeChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { useSelector } from 'react-redux';

function FlowTwo() {

    const sensorValue = useSelector((state) => state.sensors.value);
    
    var state = {
		data: [
	    {
		"group": "value",
		"value": sensorValue.flowrateTwo
	    },
    ],
		options: {
	    "title": "Flow meter #2 litres/h",
	    "resizable": true,
	    "height": "200px",
	    "gauge": {
		"status": "warning",
        showPercentageSymbol: false,
		"type": "full"
	        }   
        }
	};
    

    return (
        <GaugeChart
			data={state.data}
			options={state.options}>
		</GaugeChart>
    );
}

export default FlowTwo;