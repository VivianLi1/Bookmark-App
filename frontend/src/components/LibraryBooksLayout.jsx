import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LibraryBook from "./LibraryBook";

const LibraryBooksLayout = ({user}) => {

    const [books, setBooks] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect (() => {
            axios ({
                method: "get",
                url: `https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users/${user.sub}/books`,
            })
                .then((response) => {
                    console.log(response.data);
                    setIsFetching(false);
                    setBooks(response.data);
                })
                .catch((error) => {
                    setIsFetching(false);
                    console.log(error);
                });
        
    }, [user]);

    const deleteFromBooks = (book) => {
        setBooks((prevBooks) => {
            return prevBooks.filter((prevBook) => prevBook.id !== book.id);
        });
    }

    return (
        <div className="library-books-layout">
            { isFetching ? <CircularProgress color="inherit"/> : books.map((book) => <LibraryBook book={book} key={book.id} deleteFromBooks={deleteFromBooks}/>)}
        </div>
    );
}

export default LibraryBooksLayout;