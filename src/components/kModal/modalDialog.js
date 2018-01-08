import React from "react";
import ReactDOM from "react-dom";
import styles from "./kModal.less";
import classnames from "classnames";

console.log(styles.kModalDialogFade);

export default class ModalDialog extends React.Component {
  componentDidMount() {
    // console.log("...........");
  }

  handleRef = node => {
    // console.log(node);
    const prevClassName = node.className;
    requestAnimationFrame(() => {
    //   console.log(classnames(prevClassName, styles.kModalDialogFade));
      node.className = classnames(prevClassName, styles.kModalDialogFade);
    });
  };

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <div
        ref={this.handleRef}
        className={classnames(styles.kModalDialog, styles.kModalDialogMd)}
      >
        <div className={styles.kModalDialogHeader}>
          <button onClick={this.handleClose}>close</button>
        </div>
        <div className={styles.kModalDialogBody}>{this.props.children}</div>
        <div className={styles.kModalDialogFooter}>footer</div>
      </div>
    );
  }
}
