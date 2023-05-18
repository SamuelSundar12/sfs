import React from "react";
import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/Entity");
  };
  return (
    <div style={{ marginLeft: "90%" }}>
      <button
        type="submit"
        style={{ marginBottom: "10px" }}
        className="btn btn-primary"
        onClick={handlesubmit}
      >
        Create
      </button>
      <br />
      <button
        type="submit"
        style={{ marginBottom: "10px" }}
        className="btn btn-primary"
        onClick={() => navigate("/update")}
      >
        Modify
      </button>
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => navigate("/query")}
      >
        Query
      </button>
    </div>
  );
}

export default First;
