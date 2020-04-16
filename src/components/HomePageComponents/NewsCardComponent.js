import React, { Component } from "react";
import "../../styles/News.css"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader} from 'reactstrap';
import { NEWS_API_URL, NEWS_API_CREDIT } from "../../constants";


class NewsCardComponent extends Component {
    render() {
        const article = this.props.article;
        return (
            <li class="news-card">
                <Card>
                <CardHeader><h5>{article['sourceName']}</h5></CardHeader>
                    <CardBody>
                        <CardText>{article['description']}</CardText>
                        <a href={article['url']}>
                            <CardImg src={article['urlToImage']}></CardImg>
                            <CardTitle><h5>{article['title']}</h5></CardTitle>
                        </a>
                        <CardSubtitle>
                            <a className="news-credit" href={NEWS_API_URL}>{NEWS_API_CREDIT}</a>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </li>
        )
    }
}

export default NewsCardComponent;