import '../scss/main.css'

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
