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
        <img src={RuleIcon} alt="Rules" srcset="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;