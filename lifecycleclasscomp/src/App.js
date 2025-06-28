import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Class Component Life Cycle Methods</h1>

        <ul>
          <h2>Mounting Methods</h2>
          <li>constructor</li>
          <li>static getDerivedStateFromProps</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ul>

        <ul>
          <h2>Updating Methods</h2>
          <li>static getDerivedStateFromProps</li>
          <li>shouldComponentUpdate</li>
          <li>render</li>
          <li>getSnapshotBeforeUpdate</li>
          <li>componentDidUpdate</li>
        </ul>

        <ul>
          <h2>Unmounting Method</h2>
          <li>componentWillUnmount</li>
        </ul>

        <ul>
          <h2>Error Handling Methods</h2>
          <li>static getDerivedStateFromError</li>
          <li>componentDidCatch</li>
        </ul>
      </>
    );
  }
}

export default App;
