import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key={book.title}>
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
  books: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
