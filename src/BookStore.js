import {observable, computed, action, useStrict} from "mobx";


useStrict(true);
//DataStore for this Demo
class BookStore {

    @observable
    _books = [];


    constructor() {
        this._books.replace([
            {title: "How to Learn JavaScript - Vol 1", info: "Study hard"}
            , {title: "How to Learn ES6", info: "Complete all exercises :-)"}
            , {
                title: "How to Learn React",
                info: "Complete all your CA's", moreInfo: ""
            }
            , {
                title: "How to become a specialist in Computer Science - Vol 4",
                info: "Don't drink beers, until Friday (after four)",
                moreInfo: "5 Points = 5 beers ;-)"
            }
        ])
    }

    @computed
    get books() {
        return this._books;
    }

    @action
    addBook(book){
        this._books.push(book);
    }
    @action
    deleteBook(book){
        this._books.pop(book);
    }

    @computed
    get bookCount() {
        return this._books.length;
    }

}
export default new BookStore();

