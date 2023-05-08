import React, { useEffect,  useState } from 'react'
import Service from '../Services/Service'
import Entity from './Entity'

function EntityInfo(props) {
  
  const  [data, setdata] =  useState([])
  
  const [constitution,setConstitution]=useState([])

  useEffect(()=>{
    Service.getBranch().then(res=>setdata(res))
    },[])
    useEffect(()=>{
      Service.getConstitution().then(res=>setConstitution(res))
      },[])
     
      


  



  return (
    <div className="container mt-4">
      <h3>EntityInfo</h3>
      <div className="row">
        <div className="col-sm-6">
        <label htmlFor="Branch">Branch</label>
      <select className="form-select" id="branchid" onChange={props.handleselect} required>
        <option>-- Select Branch--</option>
        {data.map(c => (
          <option value={c.branchid}>{c.branchname}</option>
        ))}
      </select>
          <label>Residental Status</label>
          <select className="form-control mb-3" type="text" id="residentialCode" onChange={props.handlechange}
 required
>
  <option value="">--SELECT--</option>
  <option value="1">Indian Resident</option>
  <option value="0">Non Indian Resident</option>
</select>
          <label>Title</label>
          <select className="form-control mb-3" type="text"   onChange={props.handlechange}
 required
 >
   <option value="">--SELECT--</option>
   <option value="Mr.">Mr.</option>
   <option value="Mrs.">Mrs.</option>
   </select>
          <label>PAN</label>
          <input className="form-control mb-3" type="text"   ></input>
          <label>Status</label>
          <input className="form-check-input mb-3" type="checkbox" checked disabled></input>
         <br/> <label>Life Cover Block</label>
          <input className="form-check-input mb-3" type="checkbox" id="entityLifeBlockRecordId" onChange={props.handlestatus}></input>
        </div>
        <div className="col-sm-6">
          <label>Constitution</label>
          <select className="form-select" id="constitution" onChange={props.handleselect1}
          required>
        <option>-- Select Constitution--</option>
        {constitution.map(c => (
          <option value={c.id}>{c.constitutionName}</option>
        ))}
      </select>
          <label>Name</label>
          <input className="form-control mb-3" type="text" id="name" onChange={props.handlechange} required></input>
          
        </div>
      </div>
    </div>
  )
}

export default EntityInfo