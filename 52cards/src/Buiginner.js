import React from 'react';
import ContainedButtons from './ContainedButtons'
import Typography from '@material-ui/core/Typography';
import './IntroPage'
import { Switch, Route, Link } from 'react-router-dom'
import TextFields from './TextFields'
import './Play.css'
import TransferList from './TransferList'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MouseOverPopover from './MouseOverPopover'
import VerticalLoad from './VerticalLoad'
import SnackBar from './MySnackbarContentWrapper'

export default function Buiginner(props) {

  return (
    <div>
        <div className="all">
            <div className="containerScore">
                
                <Typography variant="body1">
                    Score 
                </Typography>
                <Typography className="number" variant="body1">
                    {props.score}
                </Typography>
            </div>
            <div className="containerQuestion">     
                <Typography variant="h5">
                    Your Number is 
                </Typography> 
                <Typography className="number" variant="h5">
                    {props.number}
                </Typography> 
                <MouseOverPopover {...props} />   
            </div>
            <div className="containerAnswer">
                <TextFields {...props} />
            </div>
            <div className=" ">
                <Typography className="checkCorrect" variant="body1">
                    {props.correctOrNot}
                </Typography>
            </div>
            <div className="containerVert">
                { Object.entries(props.numbersPlusLetters).map(function(numPlusletter) {
                    return <VerticalLoad counter={numPlusletter[1].counter} />
                })}
            </div>
            <SnackBar {...props} />
        </div>
    </div>
  );
}