import React from "react";
import ReactDOM from "react-dom";
import styles from "./articleTemplate.less";
// import { ModalContainer, ModalDialog } from "../modal";
// import { ModalContainer, ModalDialog } from "react-modal-dialog";
import KModal from "../kModal";
import ModalDialog from "../kModal/modalDialog";

export default class ArticleTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isShowingModal: false };
  handleClick = () => this.setState({ isShowingModal: true });
  handleClose = () =>
    this.setState({
      isShowingModal: false
    });

  render() {
    const modalProps = {
      handleClick: this.handleClick,
      handleClose: this.handleClose,
      isShowingModal: this.state.isShowingModal
    };

    return (
      <div>
        <button onClick={this.handleClick}>btn</button>
        {/* {this.state.isShowingModal && <KModal {...modalProps}>test</KModal>} */}
        <KModal {...modalProps}>test</KModal>
      </div>
    );
  }
}
