import React, { useState, useEffect } from 'react';
import Interweave from 'interweave'
import blinker from './blinker'


function OutputDisplay(props) {
  return (<div id="outputDisplay" className="outputDisplay">
   <p className="outputString"> {props.string} </p>
    
    </div>);
}

export default OutputDisplay;