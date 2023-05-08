import React, { useState } from 'react'
import  { useEffect } from 'react'
import Service from '../Services/Service'
function GST(props) {
  const [rows, setRows] = useState([]);
  const  [data, setdata] =  useState([])
  const  [stateid, setstateid] =  useState()
  useEffect(()=>{
    Service.getState().then(res=>setdata(res))
    },[]) 
    const handleselect1=(e)=>{
      setstateid(e.target.value)
      props.handlegst(e)
    }
    // useEffect(()=>{
    //   Service.postGSTdetails
    // })
  
  const addRow = () => {
    const newRow = {
      id: "1",
      stateName: "",
      stateCode: "",
      gstin: "",
      authorizedPerson: "",
      address: "",
      mobileNumber: "",
      email: "",
      status: ""
    };
    setRows([...rows, newRow]);
  }
  const handleInputChange = (event, rowId, field) => {
    const updatedRows = rows.map(row => {
      if (row.id === rowId) {
        return {
          ...row,
          [field]: event.target.value
        };
      } else {
        return row;
      }
    });
    setRows(updatedRows);
    props.handlegst(event)
  }


  return (
    <div className="container">
      <h3>GST details</h3>
      {rows.length === 0 &&
        <button onClick={addRow}>Add</button>
      }
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Delete</th>
            <th>Edit</th>
            <th>GST State Name</th>
            <th>GST State code</th>
            <th>GSTIN</th>
            <th>Name of the Authorized Person</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Mail ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td><button>Delete</button></td>
              <td><button>Edit</button></td>
              <td>
      <select className="form-select" id="gstStateName" onChange={handleselect1} style={{minWidth:"max-content"}}>
        <option>-- Select State --</option>
        {data.map(s => (
          <option value={s.stateid}>{s.statename}</option>  
        ))}
      </select>
      </td>
              <td><input type="text" value={row.stateCode} id="gstStateCode" onChange={((event) => handleInputChange(event, row.id, "stateCode"))} /></td>
              <td><input type="text" id="gstinNo" value={row.gstin} onChange={(event) => handleInputChange(event, row.id, "gstin")} /></td>
              <td><input type="text" id="authorizedPerson" value={row.authorizedPerson} onChange={(event) => handleInputChange(event, row.id, "authorizedPerson")} /></td>
              <td><input type="text" id="gstinAddress"value={row.address} onChange={(event) => handleInputChange(event, row.id, "address")} /></td>
              <td><input type="text" id="mobileNo" value={row.mobileNumber} onChange={(event) => handleInputChange(event, row.id, "mobileNumber")} /></td>
              <td><input type="text" id="email" value={row.email} onChange={(event) => handleInputChange(event, row.id, "email")} /></td>
              <td><input type="text" id="status" value={row.status} onChange={(event) => handleInputChange(event, row.id, "status")} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GST