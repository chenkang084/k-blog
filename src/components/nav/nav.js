import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import styles from "./nav.less";
import { listenVisibilityState } from "../../utils/events";
import classnames from "classnames";
import { getUrlPath } from "../../utils/url";
import Footer from "../footer/footer";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    const pathname = getUrlPath(window.location.pathname) || "home";
    this.state = { navDisplay: "/" + pathname };
    this.titles();
  }

  menus = [
    { title: "美食生活", href: "/#" },
    { title: "微店", href: "/weiStore" },
    { title: "了解酱辛", href: "/aboutUs" }
  ];

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleDisplay = title => {
    this.setState({ navDisplay: title });
  };

  titles = () => {
    listenVisibilityState(
      () => {
        console.log("show");
      },
      () => {
        console.log("hide");
      }
    );
  };

  render() {
    return <div style={{ height: "100%" }}>
        <header className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.home}>
              <Link to="/home" className={classnames("animated", "fadeInDown", this.state.navDisplay === "/home" ? styles.navDefault : "")} onClick={() => {
                  this.handleDisplay("/home");
                }}>
                <i className={styles.navLogo} />酱辛世家
              </Link>
            </div>
            <ul>
              {this.menus.map(item => {
                return <li className={classnames("animated", "fadeInDown")} key={item.title} onClick={() => {
                      this.handleDisplay(item.href);
                    }}>
                    <Link to={item.href} className={item.href === this.state.navDisplay ? styles.navTitleDefault : ""}>
                      {item.title}
                    </Link>
                  </li>;
              })}
            </ul>
          </div>
        </header>
        <div id="router-content" style={{ height: "calc(100% - 306px)" }}>
          {this.props.children}
        </div>
        <Footer />
      </div>;
  }
}
