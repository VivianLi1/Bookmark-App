import axios from "axios";
import '../styles/AddBookPage.css';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import AddBookForm from "./AddBookForm";
import { Button } from "@mui/material";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import FetchedBooksLayout from "./FetchedBooksLayout";
import LoadingPage from "./LoadingPage";

const AddBookPage = (props) => {

    const [isFetching, setIsFetching] = useState(false);
    const [query, setQuery] = useState("");
    const [fetchedBooks, setFetchedBooks] = useState([]);

    const { user } = useAuth0();

    useEffect(() => {
        if(isFetching){
            axios({
                method: "get",
                url: "https://openlibrary.org/search.json?q=" + query,
            })
                .then((response) => {
                    setIsFetching(false);
                    setFetchedBooks(response.data.docs);
                })
                .catch((error) => {
                    setIsFetching(false);
                    console.log(error);
                });
        }
    }, [query, isFetching]);

    const handleSubmit = (formData) => {
        const waitQuery = () => setQuery(formData.query);
        waitQuery();
        setIsFetching(true);
    };

    return (
        <div className="add-book-page">
            <div className="nav">
                <Button variant="outlined" color="inherit" component={Link} to="/">back to my library</Button>
                <LogoutButton />
            </div>
            <div className="search">
                <AddBookForm onSubmit={handleSubmit} disabled={isFetching}/>
            </div>
            {isFetching ? <LoadingPage /> : <FetchedBooksLayout fetchedBooks={fetchedBooks} user={user}/>}
            
        </div>
    )
}

export default AddBookPage;