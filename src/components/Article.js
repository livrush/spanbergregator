import React from 'react';

const Article = ({ article }) => (
    <li className="article list-group-item">
        <div className="row">
            <div className="col-4">
                <img className="article-img" src={article.urlToImage} />
                <p> { article.source.name } </p>
                <p> { article.publishedAt } </p>
            </div>
            <div className="col-8">
                <p>
                    <a href={ article.url } target="_blank">
                        { article.title }
                    </a>
                </p>
                <p>
                    { article.description }
                </p>
            </div>
        </div>
    </li>
);

export default Article;