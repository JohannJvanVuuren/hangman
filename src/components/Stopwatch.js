import '../scss/main.css';
import {useEffect} from "react";

export const Stopwatch = ({isTimerActive, setIsTimerActive, time, setTime, timerPaused}) => {

    setIsTimerActive(false);

    useEffect(() => {

        let interval;

        if (isTimerActive === false && timerPaused === false) {
            interval = setInterval(() => {
                   setTime(prevState => prevState + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }

    }, [isTimerActive, timerPaused, setTime]);



    return (
        <div className={"timer"}>
            <span className="digits">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            {/*<span className="digits mili-sec">*/}
            {/*    {("0" + ((time / 10) % 100)).slice(-2)}*/}
            {/*</span>*/}
        </div>
    )
}