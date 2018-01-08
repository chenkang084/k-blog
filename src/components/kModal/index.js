import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalDialog from "./modalDialog";
import keycode from "keycode";

export default class KModal extends React.Component {
  static propTypes = {
    isShowingModal: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  componentDidMount() {
    this.createModalWrap();
    if (this.props.isShowingModal) {
      // true,render modal dialog
      this._render();
    }
  }

  componentDidUpdate() {
    if (this.props.isShowingModal) {
      if (!this.modalWrap) {
        this.createModalWrap();
      }
      this._render();
    } else {
      // false ,close the modal
      if (this.modalWrap) {
        this.dismissModal();
      }
    }
  }

  componentWillUnmount() {
    this.dismissModal();
  }
  /**
   * create modal wrap ,and add event listen
   */
  createModalWrap = () => {
    // create modal mask
    this.modalWrap = document.createElement("div");
    document.body.appendChild(this.modalWrap);

    this.modalWrap.removeEventListener("click", this.props.handleClose);
    this.modalWrap.addEventListener("click", e => {
      const target = e.target;
      if (
        target &&
        target.className &&
        target.className.indexOf("kModal") > -1
      ) {
        this.props.handleClose();
      }
    });

    document.removeEventListener("keyup", this.props.handleClose);
    document.addEventListener("keyup", e => {
      const key = keycode(e);
      if (key && key === "esc") {
        this.props.handleClose();
      }
    });
  };

  /**
   * before close the modal,execuate some animations
   */
  dismissModal = () => {
    const dialog = this.modalWrap.getElementsByClassName("kModalDialog")[0];
    if (dialog) {
      dialog.classList.remove("kModalDialogFade");
      this.modalWrap.classList.remove("kModalFade");
    }
    setTimeout(() => {
      document.body.removeChild(this.modalWrap);
      this.modalWrap = null;
    }, 300);
  };

  _render() {
    this.modalWrap.className = "kModal";
    // 17s means the frequence of genearl display device are 60/70Hz , so 1000/60 = 17
    setTimeout(() => {
      this.modalWrap.classList.add("kModalFade");
    }, 17);

    ReactDOM.render(
      <ModalDialog {...this.props}>{this.props.children}</ModalDialog>,
      this.modalWrap
    );
  }

  render() {
    return null;
  }
}
