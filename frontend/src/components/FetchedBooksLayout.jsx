import FetchedBook from "./FetchedBook";
import { Box } from "@mui/material";

const FetchedBooksLayout = ({ fetchedBooks, user }) => {

    return (
        <Box display="flex" justifyContent="center">
            <div className="fetched-books-layout">
                {fetchedBooks.map((book) => <FetchedBook book={book} user={user} key={book.key}/>)}
            </div>
        </Box>
    )

}

export default FetchedBooksLayout;