import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [employees, setEmployees] = useState([]);

  //api call creation
  const fetchEmployees = async () => {
    const result = await axios.get("http://localhost:8000/getEmployees");
    setEmployees(result.data.message);
    // console.log(result);
  };
  //api -delete
  const deleteEmployee = async (id) => {
    const result = await axios.delete(
      "http://localhost:8000/deleteEmployee/" + id
    );
    alert(result.data.message);
    // inorder to refresh after deleteing an element,deletecheytha apo thanna kanikm
    fetchEmployees();
  };

  // functionil kodthath consolel kanikande
  console.log(employees);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="">
      <Row>
        <Col lg={4} className="ms-3">
          <div className="w-100 border text-center container bg-primary text-light p-4 mt-3">
            <h1 className="text-center">Employee Management App</h1>
            <p>
              Today, we’re going to run through how to build a relatively simple
              but no less powerful tool - an employee management app using
              Budibase. Your employees - along with their skills, knowledge, and
              expertise - are some of your most valuable assets. Therefore,
              making better use of their time is one of the easiest ways to
              create huge efficiency savingsAnd for that, we need proper
              oversight.
            </p>
            <Link to={"/add"}>
              <Button variant="info" className="fs-5">
                <i class="fa-solid fa-user-plus"></i> Add New Employee
              </Button>
            </Link>
          </div>
        </Col>

        <Col lg={6}>
          <Image
            style={{ height: "350px", display: "flex" }}
            className="w-100 ms-5 p-3"
            src="/Employee-and-Staff-Management2--1-.jpg"
          />
        </Col>
      </Row>

      <div className="container-fluid mt-4 bg-light p-2 border">
        <h1 className="text-center">List of Employees</h1>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr className="text-warning">
              <th>#</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee, index) => (
              <tr>
                <td>{index}</td>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.experience}</td>
                <td className="text-center">
                  <ButtonGroup className="p-2 ms-3">
                    <Link to={`edit/${employee.id}`}>
                      <Button variant="info">
                        <i class="fa-solid fa-user-pen"></i>Edit
                      </Button>
                    </Link>
                    <Link to={`view/${employee.id}`}>
                      <Button variant="success">
                        <i class="fa-solid fa-street-view"></i>View
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        onClick={() => deleteEmployee(employee.id)}
                        variant="danger"
                      >
                        <i class="fa-solid fa-trash"></i>Delete
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
