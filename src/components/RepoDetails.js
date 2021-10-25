// libraries
import { useLocation } from "react-router-dom";
import { Badge, Container, Row, Col, Card } from "react-bootstrap";
import { FaGlobe, FaRegEye, FaRegClone, FaRegStar } from "react-icons/fa";

// components
import Header from "./Header";

// stylesheets
import "../stylesheets/RepoDetails.css";

function RepoDetails() {
    const result = useLocation().state
    const topics = result.topics

    // takes in a number and formats them to nearest 1000s and adds a K
    const numberFormatter = (number) => {
        if (number >= 1000) {
            return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return number;
    }

    return (
        <Container>
            <Header />

            <Card className="card-details">
                <Row>
                    <Col lg={8}>
                        <Card.Body>
                            <Card.Title className="repo-details">
                                <span>
                                    <a href={result.owner.html_url} className="repo-title">{result.owner.login} </a>
                                </span>
                                <span className="backslash">
                                    /
                                </span>
                                <span>
                                    <a href={result.svn_url} className="repo-title"> {result.name}</a>
                                </span>
                            </Card.Title>
                            <Card.Text className="repo-details">
                                {result.description}
                            </Card.Text>
                            <Card.Text className="repo-details" id="language">
                                <FaGlobe />{' '}
                                {result.language}
                            </Card.Text>
                            <Card.Text className="repo-details">
                                <Row>
                                    <Col >
                                        <h6>Project URL</h6>
                                    </Col>
                                    <Col>
                                        <a href={result.svn_url}>{result.svn_url}</a>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text className="repo-details">
                                <Row>
                                    <Col>
                                        <h6>Open Issues</h6>
                                    </Col>
                                    <Col>
                                        {result.open_issues_count}
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text className="repo-details">
                                <Row>
                                    <Col>
                                        <h6>Topics</h6>
                                    </Col>
                                    <Col>
                                        {
                                            topics.length ? (
                                                topics.map((topic, index) => {
                                                    return (
                                                        <Badge key={index} pill className="badge-group">
                                                            {topic}
                                                        </Badge>
                                                    )
                                                })
                                            )
                                                : <Badge pill className="badge-group">none</Badge>
                                        }
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Col>
                    <Col lg={4}>
                        <Card.Body>
                            <Row >
                                <Col>
                                    <Card.Text className="count-row">
                                        <FaRegEye />{' '}
                                        {numberFormatter(result.watchers_count)}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="count-row">
                                        <FaRegStar />{' '}
                                        {numberFormatter(result.stargazers_count)}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="count-row">
                                        <FaRegClone />{' '}
                                        {numberFormatter(result.forks_count)}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>

                </Row>

            </Card>
        </Container>
    )
}

export default RepoDetails;

