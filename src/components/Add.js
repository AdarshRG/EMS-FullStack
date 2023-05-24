import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 as uuid} from 'uuid';
// npm install uuidv4



function Add() {
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [desig,setDesig]=useState('')
  const [sal,setSal]=useState(0)
  const [exp,setExp]=useState(0)

  useEffect(()=>{
setId(uuid().slice(0,3))
  },[])

 const  addEmployee=async (e)=>{
e.preventDefault()
setId(uuid().slice(0,3))
const body={
  id,
  name,
  designation:desig,
  salary:sal,
  experience:exp
}
const result=await axios.post('http://localhost:8000/addEmployee',body)
alert(result.data.message)
  }

// console.log(id);
// console.log(name);
// console.log(desig);
// console.log(sal);
// console.log(exp);

  return (
    <div>
      <h1 className="text-center">Employee Management App</h1>
    <p className='p-5 fs-5' >When you have a couple of team members all working in the same location, this isn’t such a challenge. For bigger, remote, or dispersed teams, things can get very tricky, very quickly.We’re going to show you how you can build a fully custom solution for managing your employees, with minimal coding skills - in just six steps.</p>

      <h1 className='text-center' >Employee Data</h1>
       <form action='' className='container w-50 p-5 bg-light mb-5 text-center border' >
        <input onChange={(e)=>setName(e.target.value)} type='text' className='form-control' placeholder='employee name' name="n1" id='an1' />
        <input  onChange={(e)=>setDesig(e.target.value)} type='text' className='form-control' placeholder='designation'name="n2" id='an2'/>
        <input  onChange={(e)=>setSal(e.target.value)} type='text' className='form-control'placeholder='salary'name="n3" id='an3'/>
        <input  onChange={(e)=>setExp(e.target.value)}type='text' className='form-control'placeholder='experience'name="n4" id='an4'/>
        <button onClick={(e)=>addEmployee(e)} className='btn btn-primary p-2 w-25 mt-4' >Add</button>
        </form>
    </div>
  )
}

export default Add