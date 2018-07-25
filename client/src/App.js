import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Articles from './components/Articles';
import Tweets from './components/Tweets';
import VoteInfo from './components/VoteInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: 'abigail+spanberger',
      display: 'propublica',
    };
    this.queryPress = this.queryPress.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.queryTwitter = this.queryTwitter.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.queryPropublica = this.queryPropublica.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.queryPress(query);
    this.queryTwitter();
    this.queryPropublica();
  }

  displayContent(display) {
    const { data, query } = this.state;
    if (display === 'propublica') {
      return (<VoteInfo votes={ data }></VoteInfo>);
    } else if (display === 'twitter') {
      return (<Tweets tweets={ data } ></Tweets>);
    } else if (display === 'press') {
      return (<Articles articles={ data } ></Articles>);
    }
  }

  queryPropublica() {
    const app = this;
    axios({
      method: 'get',
      url: '/propublica',
    }).then(function ({ data }) {
      app.setState({
        data,
        display: 'propublica',
      });
    });
  }

  queryPress(query) {
    const app = this;
    app.setState({ query });
    axios({
      method: 'get',
      url: `/newsApi?q=${query}`,
    }).then(function ({ data }) {
      app.setState({
        data,
        display: 'press',
      });
    });
  }

  queryTwitter() {
    const app = this;
    axios({
      method: 'get',
      url: '/twitter/timeline',
    }).then(function ({ data }) {
      app.setState({
        data,
        display: 'twitter',
      });
    });
  }

  updateQuery({ target }) {
    this.setState({
      [target.name]: target.value
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
                onClick={() => this.queryPress(this.state.query)}
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
                  className="nav-link text-primary border-primary border-bottom-0 mr-1"
                  // href="#"
                  onClick={() => this.queryPress('abigail+spanberger')}
                  >
                    <i className="fas fa-newspaper"></i>
                  </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  onClick={() => this.queryPress('dave+brat')}
                >
                  <i className="fas fa-newspaper"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  onClick={ this.queryTwitter }
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  // onClick={ this.queryTwitter }
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger border-danger border-bottom-0 mr-1"
                  // href="#"
                  onClick={ this.queryPropublica }
                >
                  <i className="fas fa-gavel"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            { this.displayContent(this.state.display) }
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
