import '../scss/main.css';

export const StartResetButton = ({onStartResetGame}) => {

    return (
        <div className={"reset-game"}>
            <button
                className={"play-button reset-button"}
                type={"button"}
                onClick={onStartResetGame}
            >Start / Reset Game
            </button>
        </div>
    )
}

export const GetScore = () => {
    return (
        <div className={"get-score"}>
            <button className={"play-button get-score-button"} type={"button"}>Get Score</button>
        </div>
    )
}