import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

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

export default ModalOverlay;
