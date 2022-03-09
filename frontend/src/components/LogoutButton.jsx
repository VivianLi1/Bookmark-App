import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = (props) => {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="login-button">
                <Button variant="outlined" onClick={() => logout()} color="inherit">Log Out</Button>
            </div>
        )
    );

}

export default LogoutButton;