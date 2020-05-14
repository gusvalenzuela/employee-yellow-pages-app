import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeTable from "../components/EmployeeTable";
import SearchForm from "../components/SearchForm";
import Employees from "../employees.json";
import EmployeeContext from "../utils/EmployeeContext.js";

function Directory() {
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState("first_name");
  const [employees, setEmployees] = useState(Employees);

  useEffect(() => {
    document.title = "EYP | Directory";

    function searchTerms(search) {
      return new Promise((resolve) => {
        if (!search) {
          resolve(Employees);
        }
        let fEmployees = Employees.filter((i) =>
          i[searchOption].toLowerCase().startsWith(search)
        );
        resolve(fEmployees);
      });
    }

    searchTerms(search).then((res) => {
      if (res.length === 0) {
        console.log("No results found.");
      }

      setEmployees(res);
    });
  }, [search, searchOption]);

  const handleSelectChange = (event) => {
    if (!event.target.value) {
      setSearchOption("first_name");
    }
    setSearch(search);
    setSearchOption(event.target.value);
  };
  const handleSearchChange = (event) => {
    if (!event.target.value) {
      setSearch("");
    }
    setSearch(event.target.value);
  };

  return (
    <div>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
      </Jumbotron>
      <EmployeeContext.Provider
        value={{
          employees,
          search,
          handleSearchChange,
          handleSelectChange,
          searchOption,
        }}
      >
        <div>
          <Container
            fluid="true"
            style={{ marginTop: 30, textAlign: "center" }}
          >
            <Row>
              <div className="col-12">
                <SearchForm />
              </div>
            </Row>
            <Row style={{ padding: "inherit" }}>
              <Col size="12">
                <EmployeeTable />
              </Col>
            </Row>
          </Container>
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
