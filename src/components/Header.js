// libraries
import { Col } from "react-bootstrap";

// components
import "../stylesheets/Header.css";

function Header() {
    return (
        <Col className="main-header">
            <h1>
                <span>GitHub</span> Repo Search Tool
            </h1>
        </Col>
    )
}

export default Header;