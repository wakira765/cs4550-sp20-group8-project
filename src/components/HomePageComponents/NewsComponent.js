import React, { Component } from "react";
import NewsCard from "./NewsCardComponent.js";
import NewsService from "../../services/NewsService";
import "../../styles/News.css"

class NewsComponent extends Component {
    state = {
        articles: [],
        newsSearchTerm: ""
    }

    componentDidMount = () => {
        NewsService.findLatestNews()
            .then( articles => this.setState({articles: articles}))
    }

    render() {
        return (
            <div id="news">
                <div id="news-header">
                    <h1 align="left">Recent News</h1>
                </div>
                <div id="news-body">
                    <ul id="news-cards-list">
                    {
                        this.state.articles.length > 0 &&
                        this.state.articles.map((article, index) => (
                            <NewsCard key={index} article={article}></NewsCard>
                        ))
                    }

                    </ul>
                </div>
            </div>
        )
    }

}

export default NewsComponent
