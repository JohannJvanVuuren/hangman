import '../scss/main.css';

export const Input = ({placeHolderText}) => {




    return (
        <div className={"guess-container"}>

            <label>Guess a letter below</label>
            <input className={"guess"} type={"text"} placeholder={placeHolderText} />
        </div>
    )
}