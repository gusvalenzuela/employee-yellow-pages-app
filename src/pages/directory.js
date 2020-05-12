import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Directory() {
  return (
    <div>
      <Jumbotron>
        <h1>BOO!</h1>
        <span role="img" alt="Tongue out emoji">😜</span>
      </Jumbotron>
      <Container style={{ marginTop: 30, textAlign: "center", }}>
        <Row>
          <Col size="12">
            <h1 className="text-center" >All employees</h1>
            <p>Oh, hi there.</p>
            <a href="/">Back home</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;
