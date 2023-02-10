import '../scss/main.css';

export const Input = ({placeholderText}) => {

    const removePlaceholderHandler = () => {

    }

    return (
        <div className={"guess-container"}>
            <label>Guess a letter below</label>
            <input className={"guess"} type={"text"} placeholder={placeholderText} onClick={removePlaceholderHandler}/>
        </div>
    )
}