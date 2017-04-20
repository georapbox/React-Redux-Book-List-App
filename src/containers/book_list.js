import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func
};

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookList.
  return {
    books: state.books
  };
}

// Anything returned from this function will end up
// as props on the BookList container.
function mapDispatchToProps(dispath) {
  // Whenever selectBook is called, the result
  // should be passed to all our reducers.
  return bindActionCreators({selectBook}, dispath);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispathc method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
