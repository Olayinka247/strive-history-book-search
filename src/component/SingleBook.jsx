//creating the single book

import { Card, Button, Modal, Form } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false,
    show: false,
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.book.asin,
    },
  };
  handleModal = () => {
    this.setState({ show: true });
  };

  CommentAdd = () => {
    const saveButton = fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.book.asin,
      {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NDc1MjI2MjUsImV4cCI6MTY0ODczMjIyNX0.RTmSZ0-bx9mogphEac7IQp8lRGPZN1el_b6ix24Fbg4",
        },
      }
    );
    if (saveButton.ok) {
      alert("comment saved");
    } else {
      alert("not saved error occured");
    }
  };

  render() {
    return (
      <div>
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.handleModal();
          }}
          style={{ border: this.state.selected ? "5px solid red" : "none" }}
          className="mt-3 text-dark "
          key={this.props.book.asin}
        >
          <Card.Img
            variant="top"
            //   className="justify-content-center"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="primary" className="mt-2">
              Price:{this.props.book.price}
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div>
                <h5>Comment Section</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      value={this.state.comment.comment}
                      onChange={(e) =>
                        this.setState({
                          comment: {
                            ...this.setState.comment,
                            comment: e.target.value,
                          },
                        })
                      }
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                      value={this.state.comment.rate}
                      onChange={(e) =>
                        this.setState({
                          comment: {
                            ...this.setState.comment,
                            rate: e.target.value,
                          },
                        })
                      }
                      type="select"
                    />
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Group>
                </Form>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={() => this.setState({ show: false })}
                variant="secondary"
              >
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default SingleBook;
