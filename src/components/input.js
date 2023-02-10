import '../scss/main.css';

export const Input = () => {
    return (
        <div className={"guess-container"}>
            <label>Guess a letter below</label>
            <input className={"guess"} type={"text"} placeholder={"Guess"}/>
        </div>
    )
}