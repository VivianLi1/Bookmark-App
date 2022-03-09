import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = (props) => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login-button">
            <Button variant="outlined" onClick={() => loginWithRedirect()} color="inherit" size="large">Log In</Button>
        </div>
    );

}

export default LoginButton;