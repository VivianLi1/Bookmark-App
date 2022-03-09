import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AddBookButton = (props) => {

    return (
        <div className="add-book-button">
            <Button 
                variant="outlined" 
                color="inherit" 
                component={Link}
                to="/addbook"
            >
                Add a book
            </Button>
        </div>
    );

}

export default AddBookButton;