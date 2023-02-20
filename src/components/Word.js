/* Import of main stylesheet generated by SCSS files */
import '../scss/main.css'

/* This component renders the random word. Initially when the correctGuesses array is empty it will render empty
* div's as placeholders for the number of characters in the word. As the correctGuesses array is populated the
* letters will be displayed in the places that they occupy in the word. This is all achieved by using the array map
* method the index of each letter in the random word is used as the unique key */
export const Word = ({randomWord, correctGuesses}) => {

    return (
        <div className={"word"}>
            {randomWord.split('').map((letter, index) => {
                return (
                    <h1 className={"letters"} key={index}>
                        {correctGuesses.includes(letter) ? letter : ''}
                    </h1>
                )
            })}
        </div>
    )





}
