import React from 'react';
import ContainedButtons from './ContainedButtons'
import Typography from '@material-ui/core/Typography';
import './IntroPage.css'
import { Switch, Route, Link } from 'react-router-dom'




export default function IntroPage(props) {

  return (
    <div>
        <div className="container">
        <h1>
            Memorise a Deck of Cards
        </h1>
        <div className="line"></div>
        <p>
            Using The Peg System learn to remember not only decks of card but phone numbers, pins and other thing goes here
        </p>
        <h1>
            What you need to know
        </h1>
        <div className="line"></div>
        <p>
            To start with we are going to associate some numbers with words to make them easier to remeber. Later these will be the positions of cards in the deck.
        </p>
        <p>
            0 = zoo, z for zero z for zoo<br />
            1 = ale, l and 1 look the same<br />
            2 = hen, n has 2 down strokes<br />
            3 = ham, m has 3 down strokes<br />
            4 = war, there is an R at the end of waR and fouR
        </p>
        <div className="containerButtons">
            <Link className="link" to="/buiginner">
            <h1>
            Buiginner
            </h1>
            </Link>
            <h1 className="vertLine">|</h1>
            <Link className="link" to="/play">
            <h1>
            Intermediate
            </h1>
            </Link>
            <h1 className="vertLine">|</h1>
            <Link className="link"  to="/play">
            <h1>
            Advanced
            </h1>
            </Link>
        </div>
        </div>
    </div>
  );
}