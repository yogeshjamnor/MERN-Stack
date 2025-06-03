import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { id: 1, name: 'ABC' };
  }
  render() {
    return (
      <>
        <h1>
          hello {this.state.name}! your id is: {this.state.id}
        </h1>
      </>
    );
  }
}
