import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Article from './components/Article.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: 'abigail+spanberger',
      articles: [],
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.updateSearch('abigail+spanberger');
  }

  generateList(articles) {
    return articles.map(article => <Article article={article}></Article>);
  }

  updateQuery({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }

  updateSearch(query) {
    const app = this;
    app.setState({ query });
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/everything?q=${query}&pageSize=100&sortBy=publishedAt`,
      headers: {
        'x-api-key':   '8f8b71f87bd146268d85ec6f6fa337ac',
      },
    }).then(function (response) {
      app.setState({
        articles: response.data.articles
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-4">
          <a href="#" className="navbar-brand">
            <span className="d-none d-sm-block" >Spanbergregator</span>
            <span className="d-sm-none" ><i class="fas fa-star"></i></span>
          </a>
          <div className="form-inline my-2 my-lg-0">
            <input
              name="query"
              className="form-control mr-sm-2"
              placeholder="Free Search"
              onChange={ this.updateQuery }
            />
            <button
              className="btn btn-outline-default my-2 my-sm-0"
              onClick={() => this.updateSearch(this.state.query)}
            >
              Search
            </button>
          </div>
        </nav>

        <div className="container" >
          <div className="container" >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link border-primary border-bottom-0 mr-1"
                  href="#"
                  onClick={() => this.updateSearch('abigail+spanberger')}
                  >Spanberger</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link border-danger border-bottom-0 mr-1"
                  href="#"
                  onClick={() => this.updateSearch('dave+brat')}
                >Brat</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="list-group border-top-0">
              { this.generateList(this.state.articles) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
