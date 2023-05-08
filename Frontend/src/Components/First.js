import React from 'react'
import { useNavigate } from "react-router-dom";

function First() {
    const navigate = useNavigate();
    const handlesubmit=()=>{
        navigate("/Entity");
    }
  return (
    <div>
      <button type="submit"  className="btn btn-primary"onClick={handlesubmit}>Create</button>
      <button type="submit" className="btn btn-primary">Modify</button>
      <button type="submit" className="btn btn-primary">Query</button>
    </div>
  )
}

export default First
