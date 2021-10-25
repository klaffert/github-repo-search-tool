//libaries
import { Container, Card, Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

// components
import ResultCount from "./ResultCount";

// stylesheets
import "../stylesheets/SearchResults.css";

function SearchResults({ isLoading, filteredResults, resultCount }) {

    // takes in a number and formats them to nearest 1000s and adds a K
    const numberFormatter = (number) => {
        if (number >= 1000) {
            return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return number;
    }

    // takes in a date and returns the number of days between present day and the initial date
    const getNumberOfDays = (lastUpdatedOnDate) => {
        const date1 = new Date(lastUpdatedOnDate);
        const date2 = new Date();

        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();

        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

    return (
        <Container className="search-results">
            {!isLoading && (
                <ResultCount resultCount={resultCount} />
            )}

            {!isLoading && filteredResults.map((result) => {
                return (
                    <div key={result.id}>
                        <Card className="repo-cards">
                            <Card.Body>
                                <CardGroup className="card-title">
                                    <Row>
                                        <Link to={{ pathname: "/" + result.id, state: result }}>
                                            <h5 className="card-header">{result.name}/{result.language}</h5>
                                        </Link>
                                    </Row>
                                </CardGroup>
                                <Card.Text className="result-data">
                                    {result.description}
                                </Card.Text>
                                <Row className="card-metadata">
                                    <Col>
                                        <Col>
                                            <Card.Text className="result-data">
                                                <FaRegStar />{' '}
                                                {numberFormatter(result.stargazers_count)}
                                            </Card.Text>
                                        </Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                        <Card.Text className="result-data">
                                            Updated {getNumberOfDays(result.pushed_at)} days ago
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
            )}
        </Container >
    )
}

export default SearchResults;