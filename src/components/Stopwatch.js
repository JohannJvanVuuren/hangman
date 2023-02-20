/* Import of the main stylesheet generated by the SCSS files */
import '../scss/main.css';

/* Import of react-modules needed in this component */
import { useEffect } from "react";

/* This component is a simple stopwatch to show the amount of time since the game started. It is simply based on
 the setInterval Web API and some state variables that are passed from App.js that indicates if the timer is
 running and the initial time setting. setTime is also in the modal component to reset the timer when the user has
 selected the help functionality*/
export const Stopwatch = ({isTimerActive, time, setTime}) => {

    /* useEffect hook used to ensure the time is incremented everytime setTime and isTimerActive is changed. */
    useEffect(() => {

        let interval;

        if (isTimerActive === false) {
            interval = setInterval(() => {
                   // Using the prevState arrow function method to increment time based on its previous value.
                   setTime(prevState => prevState + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }

    }, [isTimerActive, setTime]);

    /* Reference: https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-minutes-seconds*/
    const formattedTime = new Date(time).toISOString().slice(11, 19);

    return (
        <div className={"timer"}>
            <span className={"digits"}>
                {formattedTime}
            </span>
        </div>
    )
}