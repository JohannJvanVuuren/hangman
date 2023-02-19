import '../scss/main.css';

export const Input = ({guess}) => {




    return (
        <div className={"guess-container"}>
            <h2>Enter a guess by pressing any letter</h2>
            <div className={"guess"}>{guess}</div>
        </div>
    )
}