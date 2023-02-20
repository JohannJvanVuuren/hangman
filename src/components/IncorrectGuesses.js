/* Import of main stylesheet generated from the SCSS files */
import '../scss/main.css';

/* The purpose of this component is to display the incorrect letters but only if there are any at a specific point
* in the game */
export const IncorrectGuesses = ({incorrectGuesses}) => {

    return (
        <div className={"incorrect-guess-wrapper"}>
            <div className={"incorrect-guess"}>
                {/* This heading is only displayed if there are incorrect letters */}
                {incorrectGuesses.length > 0 && <h2>Incorrect Letters</h2>}
                {/* This section uses the incorrectGuesses array and the map method to display the incorrect
                 letters when there are any. The index is used as the unique of the technique.*/}
                {incorrectGuesses.map((letter, index) => {
                    return (
                    <span className={"incorrect-guess"} key={index}>{letter},&nbsp;</span>
                    )
                })}
            </div>
        </div>
    )
}