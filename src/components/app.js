import '../styles/main.scss';
import React, {Component} from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-lg-12">
            <h1>React-Redux Book List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <BookList />
          </div>
          <div className="col-md-8">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
