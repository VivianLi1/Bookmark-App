import { ThemeProvider } from "@emotion/react";
import { TextField, Button, createTheme } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
    palette: {
      primary: {
          main: "rgb(250, 230, 193)",
      }
    },
});

const AddBookForm = (props) => {

    const [formData, setFormData] = useState({
        query: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField  
                        id="query" 
                        aria-describedby="query-text"  
                        variant="filled" 
                        label="Search for a book"
                        value={formData.query}
                        size="small"
                        onChange={handleChange}
                        sx={{ m: 2 }}
                        fullWidth={true}
                        color="primary"
                    />
                    <Button variant="outlined" color="inherit" size="medium" type="submit" disabled={props.disabled}>Search</Button>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default AddBookForm;