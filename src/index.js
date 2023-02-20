/******************************************************************************************************************/
/* Hangman v1.0.0 - February 2023                                                                                 */
/*                                                                                                                */
/* This is a simple hangman game where the user chooses letter with the goal of guessing the identity of a hidden */
/* word. It was created using React, React Bootstrap and SCSS for the styling. The project was built as an        */
/* exercise for the Immersive Full Stack and Software Engineer Boot Camp of HyperionDev.                          */
/*                                                                                                                */
/* Creator: Johann Jansen van Vuuren                                                                              */
/******************************************************************************************************************/

/* Import of React modules needed in the app */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Import of main stylesheet generated from SCSS files and component. */
import './scss/main.css';
import { App } from './App';

/* Rendering the main App component to the HTML div with an ID of "root" */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);