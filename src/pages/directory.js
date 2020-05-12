import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeTable from "../components/EmployeeTable";
import employees from "../employees.json";

function Directory() {
  return (
    <div>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
      </Jumbotron>
      <Container fluid="true" style={{ marginTop: 30, textAlign: "center" }}>
        {/* <Row>
          <div className="col-12">
            <button>Filter by...</button>
          </div>
        </Row> */}
        <Row style={{ padding: "inherit" }}>
          <Col size="12">
            <EmployeeTable employees={employees} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;
