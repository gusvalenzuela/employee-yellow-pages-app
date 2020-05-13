import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeTable from "../components/EmployeeTable";
import SearchForm from "../components/SearchForm";
import Employees from "../employees.json";
import EmployeeContext from "../utils/EmployeeContext.js";
import Alert from "../components/Alert";

function searchTerms(search) {
  console.log(`searching for ${search} in employees`);
  return new Promise((resolve, reject) => {
    let fEmployees = Employees.filter(
      (i) =>
        i.first_name.toLowerCase() === search.toLowerCase() ||
        i.last_name.toLowerCase() === search.toLowerCase()
    );
    console.log(fEmployees);
    resolve(fEmployees);
  });
}

function Directory() {
  // const  = useContext(EmployeeContext);

  const [search, setSearch] = useState("James");
  const [employees, setEmployees] = useState(Employees)
  // const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Employee Directory";
    if (!search) {
      return;
    }
    searchTerms(search).then((res) => {
      console.log(res);
      if (res.length === 0) {
        // throw new Error("No results found.");
        console.log("No results found.");
      }

      setEmployees(res)
    });
  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
      </Jumbotron>
      <EmployeeContext.Provider value={{employees, search, handleFormSubmit, handleInputChange}}>
        <div>
          <Container
            fluid="true"
            style={{ marginTop: 30, textAlign: "center" }}
          >
            <Row>
              <Alert
                type="danger"
                // style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
              >
                {/* {error} */}
              </Alert>
              <div className="col-8">
                <SearchForm/>
              </div>
              <div className="col-4">
                <button>Filter by...</button>
              </div>
            </Row>
            <Row style={{ padding: "inherit" }}>
              <Col size="12">
                <EmployeeTable/>
              </Col>
            </Row>
          </Container>
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
