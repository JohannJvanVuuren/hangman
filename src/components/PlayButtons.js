import '../scss/main.css';

export const ResetButton = () => {
    return (
        <div className={"reset-game"}>
            <button className={"play-button reset-button"} type={"button"}>Reset Game</button>
        </div>
    )
}

export const SubmitGuess = () => {
    return (
        <div className={"submit-guess"}>
            <button className={"play-button submit-guess_button"} type={"button"}>Get Score</button>
        </div>
    )
}