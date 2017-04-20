import './styles/main.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mt-3 h2">React Book List</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('js_root'));
