import React from "react";
import ReactDOM from "react-dom";



class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleClick = () => {
    console.log("handleClick");
    this.setState(function(props) {
      return { count: props.count + 1 };
    });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.count}</div>;
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
