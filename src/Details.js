import React from "react";
import {Link} from "react-router";
import bookStore from "./BookStore";
import {hashHistory} from "react-router";

export default class Details extends React.Component {

  render() {

    let id = this.props.params.id;
    let book = this.props.route.books.filter((book, index) => {
      return index === Number(id);
    })[0];


    return (
      <div>
        <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
        <h4> {book.info}</h4>
        <h4>{book.moreInfo}</h4>
          <button onClick={this.RemoveBook}>Delete this book</button>
        <br />
        <Link to="/products">Products</Link>
      </div>
    );
  }
    RemoveBook = (book) => {
        bookStore.deleteBook(book);
        event.preventDefault();
        hashHistory.push('/products');
    }
}