import './scss/main.css';
import {useState, useEffect} from 'react';
import goldenStrip from "./resources/images/pngegg.png";
import {Header} from "./components/Header";
import {Word} from "./components/Word";
import {wordList} from "./resources/wordList";
import {StartResetButton } from "./components/PlayButtons";
import {Input} from "./components/input";
import {HangmanImage} from "./components/HangmanImage";
import {IncorrectGuesses} from "./components/IncorrectGuesses";
import {WinOrLoseMessage} from "./components/WinOrLoseMessage";
import {Stopwatch} from "./components/Stopwatch";
import {Help} from "./components/Help";
import Button from "react-bootstrap/Button";

let randomWord = wordList[Math.floor(Math.random() * wordList.length) + 1];

export const App = () => {

    const [isGameActive, setIsGameActive] = useState(true);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);
    const [guess, setGuess] = useState('');
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [time, setTime] = useState(0);
    const [timerPaused, setTimerPaused] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const inputKeydownHandler = (e) => {
            const keycodeEntered = e.keyCode;
            const letterEntered = e.key;
            setGuess(letterEntered);

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

        window.addEventListener('keydown', inputKeydownHandler);



        /* To ensure that there is only one event listener active during each rendering of the app. */
        return () => window.removeEventListener('keydown', inputKeydownHandler);


                /* Declaration of dependencies to ensure this useEffect is not called everytime the app renders.
                *  This useEffect will only be called when these dependencies get updated. */
    }, [correctGuesses, incorrectGuesses, isGameActive]);

    const onStartResetGame = () => {
        setIsGameActive(true);
        // Reset arrays and random word
        setCorrectGuesses([]);
        setIncorrectGuesses([]);
        setGuess('');
        setIsTimerActive(true);
        setTimerPaused(false);
        setTime(0);
        randomWord = wordList[Math.floor(Math.random() * wordList.length) + 1];
    }
    const openHelpModalHandler = () => {
        setModalShow(true);
    }

    const closeHelpModalHandler = () => {
        setModalShow(false);
        setTime(0);
    }

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
            <Input
                guess={guess}
            />
            <Stopwatch
                isTimerActive={isTimerActive}
                setIsTimerActive={setIsTimerActive}
                time={time}
                setTime={setTime}
                timerPaused={timerPaused}
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