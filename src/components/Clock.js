import '../scss/main.css';
import {useStopwatch} from "react-timer-hook";


export const Clock = () => {

    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
    } = useStopwatch({autoStart: true});


    return (
        <div className={"clock-container"}>
            <h2><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h2>
            <div className={"btn-container"} >
                <button className={"btn-clock"} onClick={pause}>Pause Game</button>
                <button className={"btn-clock"} onClick={start}>Resume Game</button>
            </div>
        </div>
    )

}