// libraries
import { Form, FormControl, Button, InputGroup, Col } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";

// stylesheets
import "../stylesheets/SearchForm.css";

function SearchForm({ fetchData, handleInputChange }) {
    return (
        <Col className="search-header">
            <Form onSubmit={fetchData}>
                <InputGroup className="mb-3" onChange={handleInputChange} size="lg">
                    <Button type="submit">
                        <FaSistrix />
                    </Button>
                    <FormControl
                        type="text"
                        className="search-box"
                    />
                </InputGroup>
            </Form>
        </Col>

    )
}

export default SearchForm;

