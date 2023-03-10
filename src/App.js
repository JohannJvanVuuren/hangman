/* Import of react-modules needed in app */
import { useState, useEffect } from 'react';

/* Import of main stylesheet generated by the SCSS files  */
import './scss/main.css';

/* Import of the game logo image */
import goldenStrip from "./resources/images/pngegg.png";

/* Import of array of words that will be used to generate random words */
import {wordList} from "./resources/wordList";

/* Import of all components needed in App.js including one React Bootstrap component */
import { Header } from "./components/Header";
import { Word } from "./components/Word";
import { StartResetButton } from "./components/StartResetButton";
import { CurrentGuess } from "./components/CurrentGuess";
import { HangmanImage } from "./components/HangmanImage";
import { IncorrectGuesses } from "./components/IncorrectGuesses";
import { WinOrLoseMessage } from "./components/WinOrLoseMessage";
import { Stopwatch } from "./components/Stopwatch";
import { Help } from "./components/Help";
import Button from "react-bootstrap/Button";

/* Generation of random word using the wordList array of words that was imported */
let randomWord = wordList[Math.floor(Math.random() * wordList.length) + 1];

export const App = () => {

    /* States passed down to children in most cases in this app */
    const [isGameActive, setIsGameActive] = useState(true);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);
    const [guess, setGuess] = useState('');
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [time, setTime] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    /* useEffect hook to test if each letter entered is correct or incorrect and then adding the respective letters
    * correctGuesses and incorrectGuesses state variables (both arrays) */
    useEffect(() => {

        /* Callback function to be used in the keydown event listener created below */
        const inputKeydownHandler = (e) => {
            /* Using the event object to get the identities of the keyCode and key of the letters as they are
            entered */
            const keycodeEntered = e.keyCode;
            const letterEntered = e.key;
            setGuess(letterEntered);

            /* Testing if the letters are correct or incorrect and adding them to the arrays */
            if (isGameActive && keycodeEntered >= 65 && keycodeEntered <= 90) {
                const testLetter = letterEntered.toLowerCase();
                if (randomWord.includes(testLetter)) {
                    if (!correctGuesses.includes(testLetter)) {
                        setCorrectGuesses(prevState => [...prevState, testLetter]);
                    }
                } else {
                    if (!incorrectGuesses.includes(testLetter)) {
                        setIncorrectGuesses(prevState => [...prevState, testLetter])
                    }
                }
            }
        }

        /* Creating an event listener that will be triggered whenever a key is pressed down and then triggering the
        * callback function above */
        window.addEventListener('keydown', inputKeydownHandler);

        /* To ensure that there is only one event listener active during each rendering of the app. */
        return () => window.removeEventListener('keydown', inputKeydownHandler);


        /* Declaration of dependencies to ensure this useEffect is not called everytime the app renders.
         *  This useEffect will only be called when these dependencies get updated. */
    }, [correctGuesses, incorrectGuesses, isGameActive]);

    /* A function that will be called when the start / reset button is clicked. This function changes the various
    state variables and also selects a new random word from the wordList array. This function is passed down as a
     property to the StartResetButton component.*/
    const onStartResetGame = () => {
        setIsGameActive(true);
        // Reset arrays and random word
        setCorrectGuesses([]);
        setIncorrectGuesses([]);
        setGuess('');
        setIsTimerActive(false);
        setTime(0);
        randomWord = wordList[Math.floor(Math.random() * wordList.length) + 1];
    }

    /* This function is also passed down as a property to the Button component from React Bootstrap. Its purpose is to
    * set the modalShow property to true so that the modal appears when the button is clicked on */
    const openHelpModalHandler = () => {
        setModalShow(true);
    }

    /* A function that is passed down as a property to the close button of the modal that sets modalShow to false so
    that the modal closes and also sets time to 0 so that the stopwatch is reset after the user has consulted help  */
    const closeHelpModalHandler = () => {
        setModalShow(false);
        setTime(0);
    }

    /* The rendering of all the various components. Various of the state variable and functions are passed down
    * as properties to the children of the App parent component where they will be used in the definition and
    *  functions of the individual children components. These are discussed in the component files */
    return (
        <div className={"app-wrapper"}>
            <img className={"decorator"} src={goldenStrip} alt={"Golden Strip Decorator"}/>
            <Header/>
            <Word
                correctGuesses={correctGuesses}
                randomWord={randomWord}
            />
            <WinOrLoseMessage
                correctGuesses={correctGuesses}
                incorrectGuesses={incorrectGuesses}
                randomWord={randomWord}
                setGameIsActive={setIsGameActive}
            />
            <HangmanImage
                inCorrectGuesses={incorrectGuesses}
            />
            <IncorrectGuesses
                incorrectGuesses={incorrectGuesses}
            />
            <StartResetButton
                onStartResetGame={onStartResetGame}
            />
            <CurrentGuess
                guess={guess}
            />
            <Stopwatch
                isTimerActive={isTimerActive}
                time={time}
                setTime={setTime}
            />
            <Button
                className={"play-button help-button"}
                onClick={openHelpModalHandler}
            >
                Help
            </Button>
            <Help
                show={modalShow}
                onHide={closeHelpModalHandler}
            />
        </div>
    );
}