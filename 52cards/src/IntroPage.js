import React from 'react';
import ContainedButtons from './ContainedButtons'
import Typography from '@material-ui/core/Typography';
import './IntroPage'
import { Switch, Route, Link } from 'react-router-dom'




export default function IntroPage() {

  return (
    <div>
        <div className="container">
        <Typography variant="h5">
            Learn To Memorise a Randomised Deck of Cards
        </Typography>
        <Typography variant="body1">
            Using The Peg System learn to remember not only decks of card but phone numbers, pins and other thing goes here
        </Typography>
        <Typography variant="h6">
            Step 1
        </Typography>
        <Typography variant="body1">
            learn to assoisiate numbers with coriposonding words
        </Typography>
        <Typography variant="h6">
            Step 2
        </Typography>
        <Typography variant="body1">
            learn to assoisiate cards with coriposonding words 
        </Typography>
        <Link to="/play">
        <ContainedButtons />
        </Link>
        </div>
    </div>
  );
}