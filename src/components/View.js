import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import {  ListGroup, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function View() {
  const[employee,setEmployee]=useState([])

  const params=useParams()
  // console.log(params.id);
  //api

const fetchEmp=async()=>{
  const result=await axios.get('http://localhost:8000/get-employee/'+params.id)
  setEmployee(result.data.message);

}
console.log(employee);

useEffect(()=>{
  fetchEmp()
},[])

  return (
    <div className='bg-primary' >
        <Row>
          <div className='text-center container w-50' >
          <Image style={{height:'500px', width:'50%'}} className='p-4' src="https://i.postimg.cc/x1xGjs57/successful-employees.png" roundedCircle />
          </div>

          <div className='text-center ' >
          <Card className='text-center w-50 container mb-5 mt-3 p-3 bg-light' style={{ width: '18rem' }}>
      <Card.Body>
        <h2>Employee Name :{employee.name}</h2>
        {/* <Card.Title>Employee Name : {employee.name}</Card.Title> */}
        <ListGroup className="list-group-flush" >
          <ListGroup.Item>Employee Id -<strong>{employee.id}</strong></ListGroup.Item>
          <ListGroup.Item>Designation -<strong>{employee.designation}</strong></ListGroup.Item>
          <ListGroup.Item>Salary -<strong>{employee.salary}</strong></ListGroup.Item>

        </ListGroup>
      </Card.Body>
    </Card>
          </div>
        </Row>
    </div>
  )
}

export default View