/*
SQUARES Instructions

Watch the short video in `design-files/squares.gif`:

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React from 'react';
import {useState} from 'react';

const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
  const [squares, setSquares] = useState(listOfSquareIds);
  const [activeSquare, setActiveSquare] = useState();

  const getClassName = id => {
    // if the id = the active square in state, return a string containing the class name of 'active',  otherwise return an empty string.
    return id === activeSquare ? 'active' : '';
  };

  const markActive = id => {
    id === activeSquare ? setActiveSquare() : setActiveSquare(id);
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          squares.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${getClassName(id)}`}
              onClick={() => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
