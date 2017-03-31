import React from "react";
import App from "./App";
import Details from "./Details";
import {observer} from "mobx-react";
import bookStore from "./BookStore";
import NewBook from "./NewBook";

import {hashHistory, Link, IndexRoute, Router, Route} from "react-router"

const Home = observer(() => (
    <div>
        <h2>Home View</h2>
        <p>Number of books: {bookStore.bookCount}</p>
        <p>Info about this site</p>
    </div>
))

const Company = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>Our about page</p>
        </div>
    )
}
const Blog = () => <h2>Our Company Blog</h2>



class Product extends React.Component {
    render() {
        return (
            <div>
                <h2>Our Products</h2>
                <button onClick={this.onNewBook}>Add Book</button>
                <h4>All our great books </h4>
                <ul>
                    {this.props.route.books.map((book, index) => <li key={index}>
                        {book.title} <Link to={`products/details/${index}`}>(details)</Link></li>)}
                </ul>
            </div>
        )
    }

    onNewBook = () => {
        hashHistory.push('/products/newBook');
    }
}

class RouterComponent extends React.Component {

    render() {
        var books = this.props.bookStore.books;
        console.log(this.props.msg);
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}></IndexRoute>
                        <Route path="products" component={Product}
                               books={books}/>
                        <Route path="products/details/:id" component={Details}
                               books={books}/>
                        <Route path="products/newBook" component={NewBook}
                               />
                        <Route path="company" component={Company}/>
                        <Route path="blog" component={Blog}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default RouterComponent;