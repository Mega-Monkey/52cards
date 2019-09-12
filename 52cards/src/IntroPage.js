import React from 'react';
import ContainedButtons from './ContainedButtons'
import Typography from '@material-ui/core/Typography';
import './IntroPage.css'
import { Switch, Route, Link } from 'react-router-dom'




export default function IntroPage(props) {

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
            What you need to know
        </Typography>
        <Typography variant="body1">
            To start with we are going to associate some numbers with words to make them easier to remeber. Later these will be the positions of cards in the deck.
        </Typography>
        <Typography variant="body1">
            0 = zoo, z for zero z for zoo<br />
            1 = ale, l and 1 look the same<br />
            2 = hen, n has 2 down strokes<br />
            3 = ham, m has 3 down strokes<br />
            4 = war, there is an R at the end of waR and fouR
        </Typography>
        <div className="containerButtons">
            <Link to="/buiginner">
            <ContainedButtons name={'Buiginner'} />
            </Link>
            <Link to="/play">
            <ContainedButtons name={'Intermediate'} />
            </Link>
            <Link to="/play">
            <ContainedButtons name={'Advanced'} />
            </Link>
        </div>
        </div>
    </div>
  );
}