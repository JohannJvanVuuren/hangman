/* Import of the main stylesheet generated by the SCSS files */
import '../scss/main.css';

/* Import of react-modules needed in this component */
import { useEffect } from "react";

/* This component is a simple stopwatch to show the amount of time since the game started. It is simply based on
 the setInterval Web API and some state variables that are passed from App.js that indicates if the timer is
 running and the initial time setting. setTime is also in the modal component to reset the timer when the user has
 selected the help functionality. Reference https://w3collective.com/react-stopwatch/*/
export const Stopwatch = ({isTimerActive, time, setTime}) => {

    /* useEffect hook used to ensure the time is incremented everytime setTime and isTimerActive is changed. */
    useEffect(() => {

        let interval;

        if (isTimerActive === false) {
            interval = setInterval(() => {
                setTime(prevState => prevState + 1000)
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }

    }, [isTimerActive, setTime, time]);

    return (
        <div className={"timer"}>
            <span className={"minutes"}>
                {`${'0' + Math.floor((time / 60000) % 60)}`.slice(-2)}:
            </span>
            <span className={"seconds"}>
                {`${'0' + Math.floor((time / 1000) % 60)}`.slice(-2)}
            </span>
        </div>
    )
}