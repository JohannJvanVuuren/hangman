import '../scss/main.css';
import { useEffect } from 'react';
import { checkWinOrLose } from "../helpers/helpers";

export const WinOrLoseMessage = ({correctGuesses, incorrectGuesses, randomWord, setGameIsActive}) => {

    let winOrLoseMessage = '';
    let correctWord = '';
    let gameStillActive = true;

    if (checkWinOrLose(correctGuesses, incorrectGuesses, randomWord) === 'win') {
        winOrLoseMessage = "Congratulations! You have won!👑"
        gameStillActive = false;
    } else if (checkWinOrLose(correctGuesses, incorrectGuesses, randomWord) === 'lose') {
        winOrLoseMessage = "Oh no! You lost. 😥"
        correctWord = `The correct word was ${randomWord}`;
        gameStillActive = false;
    }

    useEffect(() => setGameIsActive(gameStillActive));

    return (
        <div className={"win-or-lose-wrapper"}>
            <h2 className={"win-lose-message"}>{winOrLoseMessage}</h2>
            <h3 className={"correct-word"}>{correctWord}</h3>
        </div>
    )
}