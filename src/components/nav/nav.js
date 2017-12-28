import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import styles from "./nav.less";

console.log(styles);

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navDisplay: this.menus[0].title };
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

  render() {
    return (
      <header className={styles.nav}>
        <div className={styles.container}>
          <ul>
            {this.menus.map(item => {
              return (
                <li
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
    );
  }
}
