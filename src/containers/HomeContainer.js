import React from 'react';
import {Link} from "react-router-dom";
import NewsService from "../services/NewsService";

class HomeContainer extends React.Component {

    componentDidMount() {
        NewsService.findLatestNews()
            .then(articles => this.setState({articles: articles}))
    }

    state = {
        articles: []
    }

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <Link to="/login">Login</Link>
                <Link to="/search">Search</Link>

                {this.state.articles && this.state.articles.map((article, index) =>
                <p>{article.title}</p>)}
            </div>
        )
    }
}

export default HomeContainer
