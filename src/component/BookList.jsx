import React from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(event) =>
                  this.setState({ searchQuery: event.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((history) =>
              history.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((history) => (
              <Col md={3}>
                <Link to={"/"} key={history._id}>
                  <SingleBook book={history} />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
