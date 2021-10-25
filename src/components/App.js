// react hooks
import { useState } from "react";

// libraries
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// components
import Header from "./Header";
import SearchForm from "./SearchForm";
import Filters from "./Filters";
import SearchResults from "./SearchResults";
import RepoDetails from "./RepoDetails";

// stylesheets
import "../stylesheets/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [language, setLanguage] = useState('');
  const [resultCount, setResultCount] = useState('');
  const [results, setResults] = useState([]);
  const [sortTerm, setSortTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // handles setting search input state
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value)
  }

  // fetches data from API and sets data in state
  const fetchData = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/repositories?q=${searchInput}&per_page=100`, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setResults(data.items)
        setFilteredResults(data.items)
        setResultCount(data.total_count)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  // sets the state of the sort term selected and calls the sorting function
  const handleSort = (event) => {
    const sortTerm = event.target.value
    setSortTerm(sortTerm)
    sortResults(sortTerm)
  }

  // sets the state of the language selected and calls the filtering function
  const handleFilterLanguage = (event) => {
    const language = event.target.value
    setLanguage(language)
    filterLanguages(language)
  }

  // takes in the language selected and resets the filtered results
  const filterLanguages = (language) => {
    if (language === "" && sortTerm === "") {
      setFilteredResults(results)
    } else {
      let filteredLanguages = [...results].filter((result) => {
        return result.language === language
      })
      setFilteredResults(filteredLanguages)
    }
  }

  // takes in the sort term selected and resorts the results
  const sortResults = (sortTerm) => {
    if (sortTerm === "" && language === "") {
      setFilteredResults(results)
    } else {
      let sortedByStarGazerCount = [...filteredResults].sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
      })
      setFilteredResults(sortedByStarGazerCount)
    }
  }

  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Row>
            <Header />
            <SearchForm fetchData={fetchData} handleInputChange={handleInputChange} />
          </Row>
          <Row>
            <Col lg={4}>
              <Filters
                handleFilterLanguage={handleFilterLanguage}
                language={language}
                handleSort={handleSort}
                sortTerm={sortTerm}
              />
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <SearchResults
                isLoading={isLoading}
                filteredResults={filteredResults}
                resultCount={resultCount}
              />
            </Col>
          </Row>
        </Route>
        <Route exact path="/:id" component={RepoDetails} />
      </Switch>
    </Container>
  );
}

export default App;


