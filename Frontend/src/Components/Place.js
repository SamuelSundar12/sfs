import React, { useEffect } from 'react'
import { useState } from 'react'
import Service from '../Services/Service'
import { Form } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import './App.css';


function Place(props) {
 const  [data, setdata] =  useState([])
  const  [countryid, setcountryid] =  useState()
  const  [states, setstates] =  useState([])
  const  [stateid, setstateid] =  useState()
  const  [City, setCity] =  useState([])
   useEffect(()=>{
   Service.getCountry().then(res=>setdata(res))
   },[])

   useEffect(()=>{
  if(countryid){
    Service.getStateById(countryid).then(res=>setstates(res))
  }
  
    },[countryid])

    useEffect(()=>{
        if(stateid){
          Service.getCityById(stateid).then(res=>setCity(res))
        }
        
          },[stateid])

const hanleselect1=(e)=>{
   setcountryid(e.target.value)
   setstates([])
   setCity([])
}
const hanleselect2=(e)=>{
    setstateid(e.target.value)
    setCity([])
 }
 
  return (
    <div  >
    <h3 style={{ 
            }}>Address Info</h3>
 <div  style={{ display:'flex',justifyContent:'space-between'}}>
  
<div  className="container-fluid main_container" >
  <form>
    <div className="form-group">
      <label for="addressType">Address Type</label>
      <input type="text" className="form-control" id="addressType" value="Permanent Address" disabled required/>
    </div>
    <div className="">
      <label for="address">Address</label>
      <input type="text" className="form-control" id="address" onChange={props.handlechange} required/>
    </div>
    <div className="">
      <label for="country">Country</label>
      <select className="form-select" id="country" onChange={hanleselect1} required>
        <option>-- Select Country --</option>
        {data.map(c => (
          <option value={c.countryid}>{c.countryname}</option>
        ))}
      </select>
    </div>
    <div className="">
      <label for="state">State</label>
      <select className="form-select" id="state" onChange={hanleselect2} disabled={countryid?"":"disabled"} required>
        <option>-- Select State --</option>
        {states.map(s => (
          <option value={s.stateid}>{s.statename}</option>
        ))}
      </select>
    </div>
    <div className="">
      <label for="city">City</label>
      <select className="form-control" id="city" required>
        <option>-- Select City --</option>
        {City.map(c => (
          <option value={c.cityid}>{c.cityname}</option>
        ))}
      </select>
    </div>
    <div className="">
      <label for="location">Location</label>
      <select className="form-control" id="location" required>
        <option>--SELECT--</option>
        {City.map(c => (
          <option value={c.cityid}>{c.cityname}</option>
        ))}
      </select>
    </div>
    <div className="form-group">
            <label>Pin Code</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={props.handlechange}
            ></input>
          </div>
    <h3 >Contact Details</h3>
<div className="form-group">
            <label>Mobile no</label>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              minLength="10"
              maxLength="10"
              onChange={props.handlechange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Mail Id</label>
            <input
              type="email"
              className="form-control"
              onChange={props.handlechange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="website"
              className="form-control"
              onChange={props.handlechange}
              required
            ></input>
          </div>
  </form>
</div>


<div style={{ width:'50%'}}>
      <h4 className="text-center">Address Preview</h4>
      <div
        style={{
          padding: "25px",
          border: "1px solid #000",
          width: "400px",
          borderRadius: "10px" }}
      > <p>Address :{} </p>
        <p>State : </p>
        <p>Country : </p>
        <p>City : </p>
        <p>Current Location : </p>
        <p>Pincode :</p>
      </div>
    </div>

    </div>
</div>
  
)}

export default Place
