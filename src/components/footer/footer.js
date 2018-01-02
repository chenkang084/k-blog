import React from "react";
import ReactDOM from "react-dom";
import styles from "./footer.less";
console.log(styles);

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.footerContainer}>
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
      </div>;
  }
}
