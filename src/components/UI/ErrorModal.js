import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div onClick={props.onConfirm} className={styles.backdrop} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={props.onClick}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
