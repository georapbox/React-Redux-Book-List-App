import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {truncate} from 'lodash';
import {selectBook} from '../actions';

class BookList extends Component {
  renderList() {
    const {books, activeBook} = this.props;

    return books.map(book => {
      const truncatedDescription = truncate(book.description, {length: 45});

      return (
        <li
          className={`list-group-item media ${activeBook && activeBook.id === book.id ? 'bg-inverse text-white' : ''}`}
          key={book.id}
          onClick={() => this.props.selectBook(book)}
          style={{cursor: 'pointer'}}>
          <img className="d-flex mr-3" width="64" src={book.cover} alt={book.title} />

          <div className="media-body" style={{lineHeight: 1.2}}>
            <h6 className="mt-0 mb-1">{book.title}</h6>
            <span className="small" title={book.description}>
              {truncatedDescription}
            </span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  activeBook: PropTypes.object,
  selectBook: PropTypes.func
};

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookList.
  return {
    books: state.books,
    activeBook: state.activeBook
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
