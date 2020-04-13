import React, { Component } from "react";
import NewsCard from "./NewsCardComponent.js";
import NewsService from "../../services/NewsService";
import "../../styles/News.css"
class NewsComponent extends Component {
    state = {
        articles: []
    }

    componentDidMount = async () => {
        NewsService.findLatestNews()
            .then( articles => this.setState({articles: articles}))
    }

    render() {
        return (
            <ul id="news-cards-list">
                {this.state.articles.map(article => (
                    <NewsCard article={article}></NewsCard>
                ))}
            </ul>
        )
    }

}

export default NewsComponent