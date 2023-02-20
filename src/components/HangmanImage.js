/* Import of the main stylesheet composed from the SCSS files */
import '../scss/main.css';

/* Import of the individual hangman graphics for each step of the game (incorrect guesses */
import state1 from '../resources/images/state1.GIF'
import state2 from '../resources/images/state2.GIF'
import state3 from '../resources/images/state3.GIF'
import state4 from '../resources/images/state4.GIF'
import state5 from '../resources/images/state5.GIF'
import state6 from '../resources/images/state6.GIF'
import state7 from '../resources/images/state7.GIF'
import state8 from '../resources/images/state8.GIF'
import state9 from '../resources/images/state9.GIF'
import state10 from '../resources/images/state10.GIF'
import state11 from '../resources/images/state11.GIF'

/* Creation of an array of the images so that they can be looped through  */
const hangmanImageArray = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11
]

/* This component is used to render the hangman image as incorrect letters are entered. This is achieved by using the
* map array method and creating a correspondence between the length of the incorrectGuesses array and the index
* number of the image that must be displayed. The index was used as the unique key in creating the array map.  */
export const HangmanImage = ({inCorrectGuesses}) => {

    const errors = inCorrectGuesses.length

    return (
        <div className={"hangman-image"}>
            {hangmanImageArray.map((hangmanImage, index) => {
                return (
                    (errors === index) && <img key={index} src={hangmanImageArray[index]} alt={"Hangman"}/>
                )
            }) }
        </div>
    )
}