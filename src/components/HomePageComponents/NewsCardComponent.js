import React, { Component } from "react";

const NewsCardComponent = (news) => {
    return(
        <div class="my-2">
            <div class="card-img" align="center">
                <img
                    src={news['news']['urlToImage']}
                    width="200"
                    alt="news-article-img">
                </img>
            </div>
            <div class="card-title pointer">
                <a href={news['news']['url']}>{news['news']['title']}</a>
            </div>
        </div>
    )
}

export default NewsCardComponent;