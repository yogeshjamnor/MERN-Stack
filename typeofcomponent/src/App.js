import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { id: 1, name: 'ABC', count: 0 };
  }
  render() {
    const Demo1 = () => {
      this.setState({ name: 'yogesh' });
    };
    return (
      <>
        <h1>
          hello {this.state.name}! your id is: {this.state.id}
        </h1>
        <button onClick={() => Demo1()}>change state</button>
        <hr />
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add 1
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          reduce 1
        </button>
      </>
    );
  }
}
