import { Button } from "@mui/material";

const ReadButton = (props) => {
    
    return (
        <Button 
            className="readButton" 
            onClick={props.onClick} 
            color={props.read ? "success" : "error"}
            variant="contained"
            disabled={props.disabled}
            disableElevation>
                {props.read ? "Read" : "Not Read"}
        </Button>
    );
}

export default ReadButton;
