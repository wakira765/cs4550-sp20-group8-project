import React, { Component } from "react";
import NewsCard from "./NewsCardComponent.js";
import homeServices from "../../services/HomePageService";

class NewsComponent extends Component {
    state = {
        news_arr: []
    }

    componentDidMount = async () => {
        const results = await homeServices.getNews();
        this.setState({
            news_arr: results['articles']
        })
    }

    render() {
        return (
            <div className="row mx-0">
                {this.state.news_arr.map(news => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <NewsCard news={news}></NewsCard>
                    </div>
                ))}
            </div>
        )
    }

}

export default NewsComponent