import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import styles from "./nav.less";
import { listenVisibilityState } from "../../utils/events";
import classnames from "classnames";
console.log(styles);

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navDisplay: this.menus[0].title };
    this.titles();
  }

  menus = [
    { title: "菜谱", href: "/home" },
    { title: "博文", href: "/test" },
    { title: "心情日记", href: "/test" }
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
    return (
      <div>
        <header className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.home}>
              <Link to="/home" className={classnames("animated", "fadeInDown")}>
                <i className={styles.navLogo} />酱辛世家
              </Link>
            </div>
            <ul>
              {this.menus.map(item => {
                return (
                  <li
                    className={classnames("animated", "fadeInDown")}
                    key={item.title}
                    onClick={() => {
                      this.handleDisplay(item.title);
                    }}
                  >
                    <Link
                      to={item.href}
                      className={
                        item.title === this.state.navDisplay
                          ? styles.navTitleDefault
                          : ""
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
        <div id="router-content">{this.props.children}</div>
      </div>
    );
  }
}
