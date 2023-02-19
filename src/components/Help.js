// import '../scss/main.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Help = (props) => {



    return (
        <Modal
            {...props}
            className={"modal-background"}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h3>Help</h3>
                <ul>
                    <li>The rules are very simple</li>
                    <li>Choose a letter by typing it on the keyboard</li>
                    <li>If it is correct it will fill its position in the blank blocks of the correct word</li>
                    <li>If not, the hangman figure will update and when the figure is complete you lose</li>
                    <li>If you guess the word correctly, you win</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button className={"play-button btn-close-modal"} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



