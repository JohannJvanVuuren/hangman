import './scss/main.css';
import {Header} from "./components/Header";
import goldenStrip from '../src/resources/images/pngegg.png'
import {Clock} from "./components/Clock";
import {Word} from "./components/Word";
import {wordList} from "./resources/wordList";
import {Input} from "./components/input";
import {SubmitGuess, ResetButton} from "./components/PlayButtons";


export const App = () => {

    const time = new Date();
    time.setSeconds()

    return (
        <div className={"app-wrapper"}>
            <img className={"decorator"} src={goldenStrip} alt={"Golden Strip Decorator"}/>
            <Header/>
            <Clock/>
            <Word
                wordList={wordList}
            />
            <ResetButton/>
            <Input/>
            <SubmitGuess/>
        </div>
    );
}


