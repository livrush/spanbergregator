import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config'
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Tweets from './components/Tweets';
import VoteInfo from './components/VoteInfo';
import Finances from './components/Finances';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: config.candidateName,
      display: 'loader',
    };
    this.queryPress = this.queryPress.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.queryFinance = this.queryFinance.bind(this);
    this.queryTwitter = this.queryTwitter.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.queryPropublica = this.queryPropublica.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    // this.queryPress(query, 'candidate');
    // this.queryFinance();
    this.updateDisplay('Press', config.candidateName, config.candidateName);
  }

  showLoader() {
    this.setState({
      display: 'loader',
    });
  }

  updateDisplay(display, party, query) {
    const app = this;
    app.showLoader();
    this['query' + display](query)
    .then(function ({ data }) {
      app.setState({
        data,
        display: `${display.toLowerCase()}-${party}`,
      });
    });
  }

  queryPropublica(query, type) {
    const app = this;
    app.showLoader();
    const display = type ? 'propublica-' + type : 'propublica';
    return axios({
      method: 'get',
      url: '/propublica',
      params: {
        id: query,
      },
    // }).then(function ({ data }) {
    //   app.setState({
    //     data,
    //     display,
    //   });
    });
  }

  queryFinance() {
    const app = this;
    app.showLoader();
    return axios({
      method: 'get',
      url: '/propublica/finance',
      params: {
        candidate: config.candidateFECId,
        opponent: config.opponentFECId,
        candidateCommittee: config.candidateCommitteeFECId,
        opponentCommittee: config.opponentCommitteeFECId,
      },
    // }).then(function ({ data }) {
    //   app.setState({
    //     data,
    //     display: 'finance',
    //   });
    });
  }

  queryPress(query, type) {
    const app = this;
    app.showLoader();
    const display = type ? 'press-' + type : 'press';
    app.setState({ query });
    return axios({
      method: 'get',
      url: '/newsApi',
      params: {
        q: query,
      },
    // }).then(function ({ data }) {
    //   app.setState({
    //     data,
    //     display,
    //   });
    });
  }

  queryTwitter(username, type) {
    const app = this;
    app.showLoader();
    const display = type ? 'twitter-' + type : 'twitter';
    return axios({
      method: 'get',
      url: '/twitter/timeline',
      params: {
        u: username,
      },
    // }).then(function ({ data }) {
    //   app.setState({
    //     data,
    //     display,
    //   });
    });
  }

  updateQuery({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  displayContent(display) {
    const { data } = this.state;
    if (display === 'loader') {
      return (<Loader></Loader>);
    } else if (display.indexOf('propublica') > -1) {
      return (<VoteInfo votes={ data }></VoteInfo>);
    } else if (display.indexOf('twitter') > -1) {
      return (<Tweets tweets={ data }></Tweets>);
    } else if (display.indexOf('press') > -1) {
      return (<Articles articles={ data }></Articles>);
    } else if (display.indexOf('finance') > -1) {
      return (<Finances data={ data }></Finances>);
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar mb-4 d-flex app-nav-main">
          <a className="navbar-brand interactive">
            <span className="d-none d-sm-block upper">Spanbergregator</span>
            <span className="d-sm-none"><i className="fas fa-star"></i></span>
          </a>
          <form className="input-group w-auto" onSubmit={ target => target.preventDefault() }>
            <input
              name="query"
              className="form-control border-primary"
              placeholder="Free Search"
              onChange={ this.updateQuery }
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                onClick={() => this.queryPress(this.state.query)}
                type="submit"
            >
                Search
              </button>
            </div>
          </form>
        </nav>

        <main className="container">
          <Navbar
            display={this.state.display}
            updateDisplay={this.updateDisplay}
            queryPress={this.queryPress}
            queryFinance={this.queryFinance}
            queryTwitter={this.queryTwitter}
            queryPropublica={this.queryPropublica}
        ></Navbar>

          <div className="content">
            { this.displayContent(this.state.display) }
          </div>
        </main>

        <footer>
          <p className="text-light m-3">
            Made with NewsApi, Propublica
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
