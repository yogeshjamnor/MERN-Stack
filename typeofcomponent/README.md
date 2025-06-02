<h1>React Componets </h1>
<ul type="none">
<li>Class Component</li>
<li>functional Component</li>
</ul>
<hr>
<ul type="none">
<h3>class component</h3>
<li>this.state:
state is object to store data </li>
<li>Syntax</li>
<li>
<pre>
import React from 'react';

export default class App extends React.Component {
constructor(props) {
super(props);
this.state = { id: 1, name: 'ABC' };
}
render() {
return (hello {this.state.name}! your id is: {this.state.id}
);}}

</pre>
</li>
<hr>
<li>Constructor: inbuld method</li>
<hr>
<li>React.component : import from react to create class component</li>
</ul>
<hr>
<h2>methods:</h2>
<ul type="none">
<li>this.setState</li>
</ul>
