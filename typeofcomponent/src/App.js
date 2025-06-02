import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 1 };
  }
  render() {
    return (
      <>
        <h1>hello yogesh {this.state.id}</h1>
      </>
    );
  }
}
