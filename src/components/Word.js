import '../scss/main.css'

export const Word = ({wordList}) => {

    const lettersArray = wordList[Math.floor(Math.random() * wordList.length) + 1].split("");
    const letterBoxes = lettersArray.map((letter) =>

        <h1 className={"letters"}>{letter}</h1>
    )



    return (
        <div className={"word"}>
            {letterBoxes}
        </div>
    )




}
