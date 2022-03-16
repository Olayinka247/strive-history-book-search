//creating the single book

import { Card, Button } from "react-bootstrap";

const SingleBook = ({ books }) => (
  <Card style={{ width: "18rem" }} className="mt-3 text-dark">
    <Card.Img
      variant="top"
      className="justify-content-center"
      src={books.img}
    />
    <Card.Body>
      <Card.Title>{books.title}</Card.Title>
      <Button variant="primary">Price:{books.price}</Button>
    </Card.Body>
  </Card>
);

export default SingleBook;
