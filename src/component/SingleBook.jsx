//creating the single book

import { Card, Button } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Card style={{ width: "13rem" }} className="mt-3 text-dark">
    <Card.Img variant="top" className="justify-content-center" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Button variant="primary" className="mt-2">
        Price:{book.price}
      </Button>
    </Card.Body>
  </Card>
);

export default SingleBook;
