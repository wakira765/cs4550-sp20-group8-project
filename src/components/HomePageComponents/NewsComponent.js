import React, { Component } from "react";
import NewsCard from "./NewsCardComponent.js";
import NewsService from "../../services/NewsService";
import "../../styles/News.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class NewsComponent extends Component {
    state = {
        articles: [],
        newsSearchTerm: ""
    }

    componentDidMount = async () => {
        NewsService.findLatestNews()
            .then( articles => this.setState({articles: articles}))
    }

    handleSearchTermChange = (term) => {
        this.setState({
            newsSearchTerm: term
        })
    }

    handleNewsSearch = async () => {
        console.log("hello there")
        const result = await NewsService.findNewsBySearchTerm(this.state.newsSearchTerm)
        if (result !== null && result.length > 0) {
            this.setState({
                articles: result
            })
        }
    }

    render() {
        return (
            <>
            <div id="news-header">
                <h1 align="left">Recent News</h1>
                <input id="news-search-bar"
                       placeholder="Search the news!"
                       value={this.state.newsSearchTerm}
                       onChange={(e) => this.handleSearchTermChange(e.target.value)}
                ></input>
                <FontAwesomeIcon type="button" icon={faSearch} onClick={this.handleNewsSearch}></FontAwesomeIcon>
            </div>
            <div id="news-body">
                <ul id="news-cards-list">
                {
                    this.state.articles.length > 0 &&
                    this.state.articles.map(article => (
                        <NewsCard article={article}></NewsCard>
                    ))
                }

                </ul>
            </div>
            </>
        )
    }

}

export default NewsComponent