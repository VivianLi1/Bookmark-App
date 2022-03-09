import '../styles/LandingPage.css';

import { Container } from "@mui/material";
import LoginButton from "./LoginButton";

const LandingPage  = (props) => {

    return (
        <div className="landing-page">
            <Container  maxWidth="md" className="landing-page-container">
                <h1><i className="far fa-bookmark"></i>bookmark</h1>
                <p>your library simplified</p>
                <LoginButton />
            </Container>
        </div>
    );
}

export default LandingPage;