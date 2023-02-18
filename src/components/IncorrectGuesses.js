import '../scss/main.css';

export const IncorrectGuesses = ({incorrectGuesses}) => {

    return (
        <div className={"incorrect-guess-wrapper"}>
            <div className={"incorrect-guess"}>
                {incorrectGuesses.length > 0 && <h2>Incorrect Letters</h2>}
                {incorrectGuesses.map((letter, index) => {
                    return (
                    <span className={"incorrect-guess"} key={index}>{letter},&nbsp;</span>
                    )
                })}
            </div>
        </div>
    )
}