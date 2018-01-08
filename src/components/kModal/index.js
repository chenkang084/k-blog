import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./kModal.less";
import classnames from "classnames";
import ModalDialog from "./modalDialog";
import keycode from "keycode";

export default class KModal extends React.Component {
  static propTypes = {
    isShowingModal: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isShowingModal) {
      this._render();
    }
  }

  componentWillMount() {}

  componentDidUpdate() {
    if (this.props.isShowingModal) {
      !this.modalWrap && this._render();
    } else {
      // ReactDOM.unmountComponentAtNode(this.modalWrap);
      if (this.modalWrap) {
        document.body.removeChild(this.modalWrap);
        this.modalWrap = null;
      }
    }
  }

  _render() {
    this.modalWrap = document.createElement("div");
    document.body.appendChild(this.modalWrap);

    this.modalWrap.className = styles.kModal;
    setTimeout(() => {
      this.modalWrap.className = classnames(
        styles.kModal,
        styles.kModalFade,
        "kModal"
      );
    }, 17);

    if (this.modalWrap) {
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
    }

    ReactDOM.render(
      <ModalDialog {...this.props}>{this.props.children}</ModalDialog>,
      this.modalWrap
    );
  }

  render() {
    return null;
  }
}
