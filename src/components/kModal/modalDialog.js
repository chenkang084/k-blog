import React from "react";
import ReactDOM from "react-dom";
import styles from "./kModal.less";
import classnames from "classnames";

console.log(styles.kModalDialogFade);

export default class ModalDialog extends React.Component {
  componentDidMount() {
    // console.log("...........");
  }

  componentWillUnmount() {
    console.log(".......");
  }

  componentDidUpdate() {
    console.log(this.props.isShowingModal);
  }

  handleRef = node => {
    const prevClassName = node.className;
    setTimeout(() => {
      node.classList.add("kModalDialogFade");
    }, 17);
  };

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <div ref={this.handleRef} className={"kModalDialog kModalDialogMd"}>
        <div className={styles.kModalDialogHeader}>
          <button onClick={this.handleClose}>close</button>
        </div>
        <div className={styles.kModalDialogBody}>{this.props.children}</div>
        <div className={styles.kModalDialogFooter}>footer</div>
      </div>
    );
  }
}
