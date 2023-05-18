import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useNavigate } from "react-router-dom";

function Query() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);

  useEffect(() => {
    Service.getEntityDetails().then((res) => setData(res));
  }, []);

  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };

  const handleFetchData = () => {
    if (selectedId) {
      Service.getEntityDetailsById(selectedId).then((res) =>
        setSelectedData(res)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleStatus = () => {
    if (selectedData && selectedData.residentialCode === 1) {
      return "Indian Resident";
    } else {
      return "Non-Indian Resident";
    }
  };

  const handleCheck = () => {
    if (selectedData && selectedData.entityLifeBlockRecordId === 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {/* <button className="btn btn-secondary float-end" onClick={handleSubmit}>
            Exit
          </button> */}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <select className="form-select" onChange={handleSelect} required>
            <option>-- Select EntityDetail ID --</option>
            {data.map((c) => (
              <option key={c.id} value={c.id}>
                {c.id}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6">
          <button className="btn btn-primary" onClick={handleFetchData}>
            Fetch Data
          </button>
        </div>
      </div>
      {selectedData && (
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-start">
              <button
                className={`btn btn-link ${!tab1 && !tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(false);
                  setTab2(false);
                }}
              >
                Entity Info
              </button>
              <button
                className={`btn btn-link ${tab1 && tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(true);
                  setTab2(true);
                }}
              >
                Address Info
              </button>
              <button
                className={`btn btn-link ${tab1 && !tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(true);
                  setTab2(false);
                }}
              >
                Entity Additional Info
              </button>
              <button
                className={`btn btn-link ${!tab1 && tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(false);
                  setTab2(true);
                }}
              >
                GST Details
              </button>
            </div>
            <div className="card">
              <div div className="card-header">
                {!tab1 && !tab2 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Entity Info</h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>Branch:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.branch.branchname}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>Residential Status:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={handleStatus()}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>PAN:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.pan}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>Status:</label>
                          <input type="checkbox" checked readOnly />
                        </div>
                        <div className="form-group">
                          <label>Life Cover Block:</label>
                          <input
                            type="checkbox"
                            checked={handleCheck()}
                            readOnly
                          />
                        </div>
                      </div>{" "}
                      <div className="col-6">
                        <div className="form-group">
                          <label>Constitution:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.constitution.constitutionName}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.name}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tab1 && tab2 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Address Info</h4>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Address Type:</label>
                        <input
                          type="text"
                          className="form-control"
                          value="PERMANENT ADDRESS"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label>Address:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.address}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Country:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.city.state.country.countryname}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>State:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.city.state.statename}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>City:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.city.cityname}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.location}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Pin Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.pincode}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                )}{" "}
                {tab1 && !tab2 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Entity Additional Information</h4>

                    <div>
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>DAS EMPLOYER</td>
                            <td>{selectedData.dasEmployer}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {!tab1 && tab2 && (
                <div className="EI" style={{ color: "blue" }}>
                  <h4>GST Details</h4>

                  <div>
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>GST State Name</th>
                          <th>
                            GST<br></br> State<br></br> Code
                          </th>
                          <th>GSTIN</th>
                          <th>Name of the Authorized Person</th>
                          <th>Address</th>
                          <th>Mobile No</th>
                          <th>Mail ID</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedData.gSTdetails.gstStateName}</td>
                          <td>{selectedData.gSTdetails.gstStateCode}</td>
                          <td>{selectedData.gSTdetails.gstinNo}</td>
                          <td>{selectedData.gSTdetails.authorizedPerson}</td>
                          <td>{selectedData.gSTdetails.gstinAddress}</td>
                          <td>{selectedData.gSTdetails.mobileNo}</td>
                          <td>{selectedData.gSTdetails.email}</td>
                          <td>{selectedData.gSTdetails.status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="card-footer">
              <button className="btn btn-secondary" onClick={handleSubmit}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Query;
