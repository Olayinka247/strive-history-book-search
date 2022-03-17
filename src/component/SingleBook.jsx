//creating the single book

import { Card, Button } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "5px solid yellow" : "none" }}
        className="mt-3 text-dark "
        key={this.props.book.asin}
      >
        <Card.Img
          variant="top"
          className="justify-content-center"
          src={this.props.book.img}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Button variant="primary" className="mt-2">
            Price:{this.props.book.price}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
