import "../styles/HomePage.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

import AddBookButton from "./AddBookButton";
import LogoutButton from "./LogoutButton";
import LibraryBooksLayout from "./LibraryBooksLayout";

const HomePage  = (props) => {

    const { user } = useAuth0();
    const [ isPostingUser, setIsPostingUser ] = useState(false);

    useEffect (() => {
        axios({
            method: "get",
            url: "https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users/" + user.sub,
        })
            .then((response) => {
                if(!response.data){
                    setIsPostingUser(true);
                    console.log("no user found... posting");
                }else{
                    console.log("Successfully fetched user");
                }
            })
    }, [user]);

    useEffect (() => {
        if(isPostingUser){
            axios({
                method: "post",
                url: "https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users",
                data: {
                    id: user.sub,
                    name: user.name,
                }
            })
                .then((response) => {
                    setIsPostingUser(false);
                    console.log(response.data);
                })
        }
    }, [isPostingUser]);


    return (
        <div className="home-page">
            <div className="nav">
                <AddBookButton />
                <LogoutButton />
            </div>
            <h2>my library</h2>
            <LibraryBooksLayout user={user}/>
        </div>
    );
}

export default HomePage;