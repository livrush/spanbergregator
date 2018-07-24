import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Articles from './components/Articles.js';
import VoteInfo from './components/VoteInfo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: 'abigail+spanberger',
      articles: [],
      votes: [],
      dataVisible: true,
    };
    this.toggleData = this.toggleData.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.updateSearch(query);
    this.queryVoteData();
  }

  displayContent(showData) {
    if (showData) {
      return (<VoteInfo votes={this.state.votes}></VoteInfo>);
    } else {
      return (<Articles articles={this.state.articles} ></Articles>);
    }
  }

  queryVoteData() {
    const app = this;
    axios({
      method: 'get',
      url: '/propublica',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then(function (response) {
      console.log(response);
      app.setState({
        votes: response.data,
        dataVisible: true,
      });
    });
  }

  toggleData() {
    const { dataVisible } = this.state;
    this.setState({
      dataVisible: !dataVisible,
    });
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
      url: `/newsApi?q=${query}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then(function (response) {
      console.log(response);
      app.setState({
        articles: response.data,
        dataVisible: false,
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
            <ul className="nav nav-tabs border-bottom-0">
              <li className="nav-item">
                <a
                  className="nav-link border-primary border-bottom-0 mr-1"
                  // href="#"
                  onClick={() => this.updateSearch('abigail+spanberger')}
                  >
                    <i className="fas fa-newspaper"></i>
                  </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  onClick={() => this.updateSearch('dave+brat')}
                >
                  <i className="fas fa-newspaper"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  // onClick={() => this.updateSearch('dave+brat')}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  // onClick={() => this.updateSearch('dave+brat')}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  onClick={this.toggleData}
                >
                  <i className="fas fa-gavel"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            { this.displayContent(this.state.dataVisible) }
          </div>
        </div>
        <footer>
          <p>
            Made with NewsApi, Propublica
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
