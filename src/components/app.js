import '../styles/main.scss';
import React, {Component} from 'react';
import BookList from '../containers/book_list';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <BookList />
        </div>
      </div>
    );
  }
}

export default App;
