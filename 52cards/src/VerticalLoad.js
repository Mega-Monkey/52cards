import React from 'react';
import './VerticalLoad.css'
import TextField from '@material-ui/core/TextField';
import { getThemeProps } from '@material-ui/styles';

export default function VerticalLoad(props) {
    var c = () => {
    }
    c()
    return (
      <div>
          <div className="outer">
              <div style={{height: `${props.counter}rem`}} className="inner">
              </div>
          </div>
      </div>
    );
  };
  
