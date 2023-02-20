/* Import of the main stylesheet generated from the SCSS files. */
import '../scss/main.css'

/* A very simple component. The only purpose is to display the name of the app */
export const Header = () => {

    return (
            <div className={"header-container"}>
                    <h1>Hangman</h1>
                    <p>Version: 1.0.0</p>
            </div>
    )
}