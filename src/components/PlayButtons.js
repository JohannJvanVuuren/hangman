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
