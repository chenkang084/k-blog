import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./kModal.less";
import classnames from "classnames";
import ModalDialog from "./modalDialog";

// console.log(styles);

export default class KModal extends React.Component {
  static propTypes = {
    // isShowingModal: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._render();
  }

  componentWillMount() {}

  componentDidUpdate() {
    if (this.props.isShowingModal) {
      this._render();
    } else {
      document.body.removeChild(this.modalWrap);
    }
  }

  _render() {
    if (this.props.isShowingModal) {
      this.modalWrap = document.createElement("div");
      document.body.appendChild(this.modalWrap);
      this.modalWrap.className = styles.kModal;
      requestAnimationFrame(() => {
        this.modalWrap.className = classnames(styles.kModal, styles.kModalFade);
      });

      ReactDOM.render(
        <ModalDialog {...this.props}>{this.props.children}</ModalDialog>,
        this.modalWrap
      );
    }
  }

  render() {
    return null;
  }
}
