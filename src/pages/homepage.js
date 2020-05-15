import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Homepage() {
  return (
    <div>
      <Container style={{ marginTop: 30, textAlign: "center", }}>
        <Row>
          <Col size="12">
            <h1 className="text-center" >Welcome To EYP!</h1>
            <a href="/directory">Click here to see all employees</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
