import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';
import NavBar from '../components/Navbar';
import {Link} from 'react-router-dom';


const CreateProject = () => {
  return (
    <div>
    <NavBar/><br/><br/>
    <div class="container text-center bg-secondary bg-gradient rounded-4">
    <div className="heading text-primary">
       CREATE PROJECT
      </div>
  <div class="row mt-5">
    <div class="col">
      <p class="d-flex justify-content-start">Project Name</p>
      <MDBInput id='form1' type='text' placeholder='Enter the project name'/>
    </div>
    <div class="col">
    <p class="d-flex justify-content-start">Project Leader</p>
      <MDBInput id='form1' type='text' placeholder='Enter the project leader'/>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">
    <p class="d-flex justify-content-start">Technology</p>
      <MDBInput id='form1' type='text' placeholder='Enter the technology'/>
    </div>
    <div class="col">
    <p class="d-flex justify-content-start">Deadline</p>
      <MDBInput id='form1' type='text' placeholder='Enter the deadline'/>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">
    <p class="d-flex justify-content-start">GitHub Link</p>
      <MDBInput id='form1' type='text' placeholder='Enter the github link'/>
    </div>
    <div class="col">
    <p class="d-flex justify-content-start">Tech-Lead</p>
      <MDBInput id='form1' type='text' placeholder='Enter the tech-lead name'/>
    </div>
  </div>
  <div class="row mt-5">
  <p class="d-flex justify-content-start">Description</p>
    <MDBInput id='form1' type='text' placeholder='Enter the description'/>
  </div>
  <div class="row mt-5">
  <p class="d-flex justify-content-start">Member Details</p>
    <MDBInput id='form1' type='text' placeholder='Enter the member details'/>
  </div>
    <br/>
<div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px"}}>
                    <Link to='/success'><button className="button" class="btn btn-primary " type="submit">CREATE</button></Link>
                    </div>
    
</div>
    </div>
  )
}

export default CreateProject