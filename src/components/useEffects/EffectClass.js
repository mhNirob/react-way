import React from "react";

class EffectClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times - first`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    console.log("-> tick class");
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Date 1: {date.toLocaleTimeString()}</p>

        <p>{this.state.count}</p>

        <button type="button" onClick={this.addClick}>
          Add
        </button>
      </div>
    );
  }
}

export default EffectClass;
