import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config'
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Tweets from './components/Tweets';
import VoteInfo from './components/VoteInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: config.candidateName,
      display: null,
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
    // this.queryTwitter();
    // this.queryPropublica();
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

        <main className="container" >
          <Navbar
            queryPress={this.queryPress}
            queryTwitter={this.queryTwitter}
            queryPropublica={this.queryPropublica}
          ></Navbar>

          <div className="">
            { this.displayContent(this.state.display) }
          </div>
        </main>

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
