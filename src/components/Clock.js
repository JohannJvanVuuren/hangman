import '../scss/main.css';
import {useStopwatch} from "react-timer-hook";


export const Clock = ({onResetClock}) => {

    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
        reset,
    } = useStopwatch({autoStart: false});



        return (
        <div className={"clock-container"}>
            <h2><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h2>
            <div className={"btn-container"} >
                <button className={"btn-clock"} onClick={pause}>Pause Timer</button>
                <button className={"btn-clock"} onClick={start}>Start Timer</button>
                <button className={"btn-clock"} onClick={reset}>Reset Timer</button>
            </div>
        </div>
    )

}