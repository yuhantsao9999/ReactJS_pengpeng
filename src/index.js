import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class App extends React.Component {
//     state = {
//         name: "Ryu",
//         age: 30
//     }
//     render () {
//         return (
//             <div>
//                 <p> My name is { this.state.name } and I am { this.state.age }. </p>
//             </div>
//         )
//     }
// }
class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }
  render() {
    let className = 'switch';
    if (this.state.on) {
      className += ' switch-on';
    }
    return (
      <div onClick={this.update.bind(this)} className={className}>
        <div className="btn"></div>
      </div>
    );
  }
  update() {
    this.setState(currentState => ({ on: !currentState.on }));
  }
}

ReactDOM.render(<Switch />, document.querySelector('#root'));
