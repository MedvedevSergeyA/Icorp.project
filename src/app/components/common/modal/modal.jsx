import React from "react";
import style from "../modal/modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};

export default Modal;
