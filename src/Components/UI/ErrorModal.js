import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'



const ErrorModal = (props) => {

    const Backdrop = () => {
        return <div className={classes.backdrop} onClick={props.onConfirm} />;
    }

    const ModalOverlay = () => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        );
    }


    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
        </React.Fragment>

    )
}

export default ErrorModal