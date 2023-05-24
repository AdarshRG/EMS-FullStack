import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Edit() {

  // const [employee,setEmployee]=useState([])
  const [name,setName]=useState('')
  const [desig,setDesig]=useState('')
  const [sal,setSal]=useState(0)
  const [exp,setExp]=useState(0)

  const params=useParams()

  const fetchEmp=async()=>{
    const result=await axios.get('http://localhost:8000/get-employee/'+params.id)
    setName(result.data.message.name);
    setDesig(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);
  
  }
  const editEmployee=async (e)=>{
    e.preventDefault()
    const body={
      id:params.id,
      name,
      designation:desig,
      salary:sal,
      experience:exp
    }
    const result=await axios.post('http://localhost:8000/editEmployee/',body)
    alert(result.data.message)
  }
  useEffect(()=>{fetchEmp()},[])


  return (
    <div>
      <h1 className="text-center">Update Employee</h1>
      <p className="p-5 fs-5">
        As the name suggests, Object-Oriented Programming or OOPs refers to
        languages that use objects in programming. Object-oriented programming
        aims to implement real-world entities like inheritance, hiding,
        polymorphism, etc in programming. The main aim of OOP is to bind
        together the data and the functions that operate on them so that no
        other part of the code can access this data except that function.
      </p>
      <h3 className="text-center" >Employee Data</h3>
      <form action='' className='container w-50 p-5 bg-light mb-5 text-center border' >
        <input onChange={(e)=>setName(e.target.value)} value={name} type='text' className='form-control' placeholder='employee name' name="n1" id='an1' />
        <input onChange={(e)=>setDesig(e.target.value)} value={desig} type='text' className='form-control' placeholder='designation'name="n2" id='an2'/>
        <input onChange={(e)=>setSal(e.target.value)} value={sal} type='text' className='form-control'placeholder='salary'name="n3" id='an3'/>
        <input onChange={(e)=>setExp(e.target.value)} value={exp} type='text' className='form-control'placeholder='experience'name="n4" id='an4'/>
        <button onClick={(e)=>editEmployee(e)}  className='btn btn-primary p-2 w-25 mt-4' >Update</button>
        </form>
    </div>
  );
}

export default Edit;
