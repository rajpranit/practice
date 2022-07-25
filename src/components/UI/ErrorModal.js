import React from "react";
import ModalOverlay from "./ModalOverlay";

import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div onClick={props.onConfirm} className={styles.backdrop} />;
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
