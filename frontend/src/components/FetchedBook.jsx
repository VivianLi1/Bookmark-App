import axios from "axios";
import { useEffect, useState } from "react";
import AddBookToLibraryButton from "./AddBookToLibraryButton";
import AddBookDialog from "./AddBookDialog";

const FetchedBook = ({book, user}) => {
    
    const [isAddingBook, setIsAddingBook] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        if(isAddingBook){
            axios({
                method: "post",
                url: `https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users/${user.sub}/books`,
                data: {
                    id: book.key.replace("/works/", ""),
                    title: book.title,
                    author: book.hasOwnProperty('author_name') ? book.author_name[0] : "",
                    coverId: book.hasOwnProperty('cover_i') ? book.cover_i.toString() : "",
                    hasRead: false,
                    publishYear: book.hasOwnProperty('first_publish_year') ? book.first_publish_year.toString() : "",
                    rating: 0,
                    user_id: user.sub,
                }
            })
                .then((response) => {
                    setIsAddingBook(false);
                    console.log(response.data);
                })
                .catch((error) => {
                    setIsAddingBook(false);
                    console.log(error);
                });
        }
    }, [isAddingBook]);

    const handleAddBookToLibrary = () => {
        setDialogOpen(true);
        setIsAddingBook(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <div className="fetched-book-div">
            <div className="fetched-book">
                <div className="cover-div"><img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="cover"/></div>
                <div className="book-info">
                    <div className="fetched-book-title"><h3>{book.title}</h3></div>
                    <div className="fetched-book-author"><h4>{book.hasOwnProperty('author_name') && book.author_name[0]}</h4></div>
                    <div className="fetched-book-publish-year"><p>pub. {book.first_publish_year}</p></div>
                </div>
                <AddBookToLibraryButton onClick={handleAddBookToLibrary}/>
                <AddBookDialog
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    book={book}
                />
            </div>
            <hr />
        </div>
    );
}

export default FetchedBook;