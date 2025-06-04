import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 1, name: 'ABC', count: 0 };
  }

  render() {
    const Demo1 = () => {
      this.setState({ name: 'Yogesh' });
    };

    return (
      <>
        <h1>
          Hello {this.state.name}! Your ID is: {this.state.id}
        </h1>

        <button onClick={Demo1}>Change State</button>

        <hr />

        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add 1
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Reduce 1
        </button>

        <hr />

        <h1>
          Hello {this.props.name}! Your skill is {this.props.skill} and message
          is {this.props.msg}
        </h1>
      </>
    );
  }
}
