import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import RuleIcon from '@mui/icons-material/Rule';

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={CloseIcon} alt="Close" srcset="" />
          </button>
        </div>
        <span>
        The rock is a closed fist; paper is a flat hand with fingers and thumb extended and the palm facing downward; and scissors is a fist with the index and middle fingers fully extended toward the opposing player. Rock wins against scissors; paper wins against rock; and scissors wins against paper
        </span>
        <img src={RuleIcon} alt="Rules" srcset="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;