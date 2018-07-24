import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Article from './components/Article.js'
import VoteInfo from './components/VoteInfo.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: 'abigail+spanberger',
      articles: [],
      votes: [],
      dataVisible: false,
    };
    this.toggleData = this.toggleData.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.updateSearch(query);
  }

  queryVoteData() {
    const app = this;
    axios({
      method: 'get',
      url: 'https://api.propublica.org/congress/v1/members/B001290/votes.json',
      headers: {
        'x-api-key':  'JbT5mzD7762Hvb6MKt1x4b8IX3F30xjtlKpo2o5m',
      }
    }).then(function (response) {
      console.log(response.data.results[0]);
      app.setState({
        votes: response.data.results[0].votes,
      });
    });
  }

  toggleData() {
    const { dataVisible } = this.state;
    this.setState({
      dataVisible: !dataVisible,
    });
    this.queryVoteData();
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
        <nav className="navbar navbar-dark bg-primary mb-4 d-flex">
          <a href="#" className="navbar-brand">
            <span className="d-none d-sm-block" >Spanbergregator</span>
            <span className="d-sm-none" ><i className="fas fa-star"></i></span>
          </a>
          <form className="input-group w-auto" onSubmit={ target => target.preventDefault() } >
            <input
              name="query"
              className="form-control"
              placeholder="Free Search"
              onChange={ this.updateQuery }
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-light"
                onClick={() => this.updateSearch(this.state.query)}
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
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
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  href="#"
                  onClick={() => this.updateSearch('dave+brat')}
                >Brat</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  href="#"
                  onClick={this.toggleData}
                >Votes</a>
              </li>
            </ul>
          </div>
          <div className="">
            <VoteInfo votes={this.state.votes}></VoteInfo>
            <ul className="list-group border-top-0">
              { this.generateList(this.state.articles) }
            </ul>
          </div>
        </div>
        <footer>
          <p>
            Made with NewsApi
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
