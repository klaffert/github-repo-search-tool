// libraries
import { Container, Form } from "react-bootstrap";

// stylesheets
import "../stylesheets/Filters.css";

function Filters({ handleFilterLanguage, language, handleSort, sortTerm }) {

    return (
        <Container className="filter-form">
            <Form.Group className="sort-dropdown">
                <Form.Label>
                    Sort by
                </Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleSort} value={sortTerm}>
                    <option value="">Best Match</option>
                    <option value="Stargazer Count">Stargazer Count</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="language-dropdown">
                <Form.Label>
                    Filter by Language
                </Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleFilterLanguage} value={language}>
                    <option value="">Filter By Language</option>
                    <option value="C#">C#</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="Ruby">Ruby</option>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="TypeScript">TypeScript</option>
                </Form.Select>
            </Form.Group>
        </Container >
    )
}

export default Filters;