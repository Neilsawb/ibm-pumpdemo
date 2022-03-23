import React from 'react';
import { GaugeChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { useSelector } from 'react-redux';

function FlowThree() {

    const sensorValue = useSelector((state) => state.sensors.value);
    
    var state = {
		data: [
	    {
		"group": "value",
		"value": sensorValue.flowrateThree
	    },
    ],
		options: {
	    "title": "Flow meter #3 litres/h",
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

export default FlowThree;