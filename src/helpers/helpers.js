export const checkWinOrLose = (correctGuesses, incorrectGuesses, randomWord) => {
    let winOrLose = 'win';

    randomWord.split('').forEach((letter) => {
        if (!correctGuesses.includes(letter)) {
            winOrLose = '';
        }
    })

    if (incorrectGuesses.length === 10) {
        winOrLose = 'lose';
    }

    return winOrLose;

}