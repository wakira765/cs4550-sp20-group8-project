import React from 'react';
import {Link} from "react-router-dom";

class HomeContainer extends React.Component {


    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <Link to="/login">Login</Link>
                <Link to="/search">Search</Link>
            </div>
        )
    }
}

export default HomeContainer
