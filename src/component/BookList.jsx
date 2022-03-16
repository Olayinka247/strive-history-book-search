import React from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    searchQuery: " ",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search Libary</Form.Label>
              <Form.Control type="text" placeholder="Search here" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books.map((history) => (
            <Col md={3}>
              <SingleBook book={history} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
