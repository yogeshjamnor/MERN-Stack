import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { id: 1, name: 'ABC' };
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
      </>
    );
  }
}
