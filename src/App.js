import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import JobDetailPage from './pages/JobDetailPage.jsx'
import Navigator from './components/Navigator.jsx'
import { BrowserRouter as Router, Route, Redirect,Link } from 'react-router-dom'

class App extends Component {
  state = {
    locationInput: '',
    positionInput: '',
    searchResults: [],
    selectedJob: {},
    isLoading: false,
  };

  handleInput = (e) => {
    let name = e.target.name; 
    console.log('ID OF THIS INPUT FIELD IS', name);

    this.setState({
        ...this.state,
        [name] : e.target.value, 
    });
  };

  submitQuery = async (e) => {
    e.preventDefault()
    let baseUrl = 'https://jobs.github.com/positions.json'
    let locationQuery = `location=${this.state.locationInput}`
    let position = `description=${this.state.positionInput}`;
    try {
      let resp = await fetch(`${baseUrl}?${position}&${locationQuery}`);
      if (resp.ok){
        let data = await resp.json()
        console.log(data)
        this.setState({
          ...this.state, searchResults : data
        })
      } else {
        console.error("something's wrong!!")
      }
      <Redirect to='/results'/>
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Router>
        <Navigator />
        <Route
          path='/'
          exact
          render={(routerProps) => (
            <HomePage
              {...routerProps}
              handleInput={this.handleInput}
              locationInput={this.state.locationInput}
              positionInput={this.state.positionInput}
              submitQuery={this.submitQuery}
            />
          )}
        />
        <Route
          path='/results'
          exact
          render={(routerProps) => (
            <ResultsPage
              {...routerProps}
              searchResults={this.state.searchResults}
            />
          )}
        />
        <Route
          path='/results/:id'
          exact
          render={(routerProps) => (
            <JobDetailPage
              {...routerProps}
              selectedJob={this.state.selectedJob}
            />
          )}
        />
      </Router>
    );
  }
}





export default App;
