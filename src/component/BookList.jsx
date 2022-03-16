import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => (
  <Container>
    <Row>
      {books.map((history) => (
        <Col md={4}>
          <SingleBook book={history} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
