import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5">
            2023 Copyright &copy; EV-RIDE SHOP
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

