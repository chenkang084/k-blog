import React from "react";
import ReactDOM from "react-dom";
import styles from "./footer.less";
import classnames from "classnames";
console.log(styles);

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleCollapse = () => {
    this.setState(prev => {
      return {
        open: !prev.open
      };
    });
  };

  render() {
    return (
      <div className={styles.collapseContainer}>
        <section className={styles.closeWrap}>
          <div className={styles.closeContent}>润州酱小辛食品</div>
          <div className={styles.closeIconWrap} onClick={this.handleCollapse}>
            {this.state.open && (
              <div>
                <i
                  className={classnames("fa", "fa-angle-down", styles.icon)}
                  aria-hidden="true"
                />
              </div>
            )}
            {!this.state.open && (
              <div>
                <i
                  className={classnames("fa", "fa-angle-up", styles.icon)}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </section>
        <section
          className={
            this.state.open
              ? classnames("animated ", styles.open)
              : classnames("animated ", styles.close)
          }
        >
          <div className={styles.footerContainer}>
            <ul>
              <li>
                <div>
                  <img src="../../assets/imgs/qrcode/official_account.jpg" />
                  <p className={styles.qrcodeText}>公众号</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/imgs/qrcode/wei_store.jpg" />
                  <p className={styles.qrcodeText}>微店</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
