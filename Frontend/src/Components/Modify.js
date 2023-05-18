import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useNavigate } from "react-router-dom";

function Modify() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);
  const [branchid, setbranchid] = useState();
  const [branch, setBranch] = useState();
  const [constitutionid, setConstitutionid] = useState();
  const [constitution, setConstitution] = useState([]);
  const [country, setcountry] = useState([]);
  const [countryid, setcountryid] = useState(
    selectedData?.city?.state?.country?.countryid
  );
  const [states, setstates] = useState([]);
  const [stateid, setstateid] = useState(selectedData?.city?.state?.stateid);
  const [City, setCity] = useState([]);
  const [cityid, setCityid] = useState(selectedData?.city?.cityid);
  const [geg, setgeg] = useState(false);
  useEffect(() => {
    if (selectedId && geg) {
      Service.getEntityDetailsById(selectedId).then((res) => {
        setSelectedData(res);
      });
    }
  }, [selectedId, geg]);
  console.log();
  console.log();
  console.log();
  console.log(selectedData?.city);
  useEffect(() => {
    Service.getEntityDetails().then((res) => setData(res));
  }, []);
  useEffect(() => {
    Service.getBranch().then((res) => setBranch(res));
  }, []);
  useEffect(() => {
    Service.getConstitution().then((res) => setConstitution(res));
  }, []);
  useEffect(() => {
    Service.getCountry().then((res) => setcountry(res));
  }, []);
  useEffect(() => {
    Service.getState().then((res) => setstates(res));
  }, []);
  useEffect(() => {
    if (branchid) {
      Service.getBranchByBranchid(branchid).then((res) =>
        setSelectedData({ ...selectedData, branch: res })
      );
    }
    if (constitutionid) {
      Service.getConstitutionById(constitutionid).then((res) =>
        setSelectedData({ ...selectedData, constitution: res })
      );
    }
    if (selectedData?.city?.state?.country?.countryid) {
      Service.getStateById(selectedData.city.state.country.countryid).then(
        (res) => setstates(res)
      );
    }
    if (cityid) {
      Service.getCityByCityId(cityid).then((res) =>
        setSelectedData({ ...selectedData, city: res })
      );
    }
    console.log(selectedData?.city?.state?.stateid);
    if (selectedData?.city?.state?.stateid) {
      Service.getCityById(selectedData.city.state.stateid).then((res) => {
        setCity(res);
        console.log(res);
      });
    }
  }, [ 
    branchid,
    constitutionid,
    selectedData?.city?.state?.country?.countryid,
    cityid,
    selectedData?.city?.state?.stateid,
  ]);

  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };
  const handleselect2 = (e) => {
    setSelectedData({ ...selectedData, [e.target.id]: e.target.value });
  };

  const handleFetchData = () => {
    setgeg(true);
  };
  const handlegst = (e) => {
    setSelectedData({
      ...selectedData,
      gSTdetails: {
        ...selectedData.gSTdetails,
        [e.target.name]: e.target.value,
      },
    });
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

  const handleUpdateData = () => {
    console.log(JSON.stringify(selectedData.gSTdetails));
    console.log(selectedData.gSTdetails);
    if (selectedData) {
      Service.putEntityDetails(selectedData).then((res) => {
        setUpdatedData(res);
        alert("Data updated successfully");
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleselect = (e) => {
    setbranchid(e.target.value);
  };
  const handleselect1 = (e) => {
    setConstitutionid(e.target.value);
  };
  const hanleselect1 = (e) => {
    setcountryid(e.target.value);
    setstates([]);
    setCity([]);
  };
  const hanleselect2 = (e) => {
    setstateid(e.target.value);
    setCity([]);
  };
  const handleselect4 = (e) => {
    setCityid(e.target.value);
    setSelectedData({ ...selectedData, [e.target.id]: e.target.value });
  };
  const handlechange = (e) => {
    setSelectedData({
      ...selectedData,
      // entityCode: entityType.entitydescription,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12"></div>
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
            <button
              className={`btn btn-link ${!tab1 && !tab2 ? "active" : ""}`}
              onClick={() => {
                setTab1(false);
                setTab2(false);
              }}
            >
              Entity info
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
              Entity AdditionalInfo
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

            <div className="card">
              <div className="card-header">
                {!tab1 && !tab2 && (
                  <span className="EI" style={{ fontStyle: "italic" }}>
                    <h4> Entity Info</h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>Branch:</label>
                          <select
                            className="form-select"
                            name="branchid"
                            defaultValue={
                              selectedData.branch &&
                              selectedData.branch.branchid
                            }
                            onChange={handleselect}
                            required
                          >
                            <option>-- Select Branch--</option>
                            {branch.map((b) => (
                              <option value={b.branchid}>{b.branchname}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Residential Status:</label>
                          <select
                            className="form-control mb-3"
                            type="text"
                            name="residentialCode"
                            defaultValue={selectedData.residentialCode}
                            onChange={handlechange}
                            required
                          >
                            <option value="">--SELECT--</option>
                            <option value="1">Indian Resident</option>
                            <option value="0">Non Indian Resident</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>PAN:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="pan"
                            value={selectedData.pan}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Status:</label>
                          <input
                            type="checkbox"
                            checked
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Life Cover Block:</label>
                          <input
                            type="checkbox"
                            checked={handleCheck()}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Constitution:</label>
                          <select
                            className="form-select"
                            name="constitution"
                            defaultValue={
                              selectedData.constitution &&
                              selectedData.constitution.id
                            }
                            onChange={handleselect1}
                            required
                          >
                            <option>-- Select Constitution--</option>
                            {constitution.map((c) => (
                              <option value={c.id}>{c.constitutionName}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={selectedData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </span>
                )}

                {tab1 && tab2 && (
                  <span className="EI" style={{ fontStyle: "italic" }}>
                    <h4> AddressInfo</h4>

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
                          name="address"
                          value={selectedData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Country:</label>
                        <select
                          className="form-select"
                          name="country"
                          defaultValue={
                            selectedData?.city?.state?.country?.countryid
                          }
                          onChange={(e) => {
                            hanleselect1(e);
                            handleselect2(e);
                          }}
                          required
                        >
                          <option>-- Select Country --</option>
                          {country.map((c) => (
                            <option value={c.countryid}>{c.countryname}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>State:</label>
                        <select
                          className="form-select"
                          name="state"
                          defaultValue={selectedData?.city?.state?.stateid}
                          onChange={(e) => {
                            hanleselect2(e);
                            handleselect2(e);
                          }}
                          required
                        >
                          <option>-- Select State --</option>
                          {states.map((s) => (
                            <option value={s.stateid}>{s.statename}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>City:</label>
                        <select
                          className="form-control"
                          name="city"
                          onChange={handleselect4}
                          defaultValue={selectedData?.city?.cityid}
                          required
                        >
                          <option>-- Select City --</option>
                          {City.map((c) => (
                            <option value={c.cityid}>{c.cityname}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="location"
                          value={selectedData.location}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Pin Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          value={selectedData.pincode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </span>
                )}
                {tab1 && !tab2 && (
                  <span className="EI" style={{ fontStyle: "italic" }}>
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
                            <td>
                              <select
                                id="dasEmployer"
                                onChange={handlechange}
                                defaultValue={selectedData.dasEmployer}
                              >
                                <option value="">--SELECT--</option>
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </span>
                )}
              </div>

              {!tab1 && tab2 && (
                <span className="EI" style={{ fontStyle: "italic" }}>
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
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gstStateName"
                              defaultValue={
                                selectedData.gSTdetails.gstStateName
                              }
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gstStateCode"
                              defaultValue={
                                selectedData.gSTdetails.gstStateCode
                              }
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gstinNo"
                              defaultValue={selectedData.gSTdetails.gstinNo}
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="authorizedPerson"
                              defaultValue={
                                selectedData.gSTdetails.authorizedPerson
                              }
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gstinAddress"
                              defaultValue={
                                selectedData.gSTdetails.gstinAddress
                              }
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="mobileNo"
                              defaultValue={selectedData.gSTdetails.mobileNo}
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              defaultValue={selectedData.gSTdetails.email}
                              onChange={handlegst}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="status"
                              value={selectedData.gSTdetails.status}
                              onChange={handlegst}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedData && (
        <div className="row mt-4">
          <div className="col-12">
            <button
              className="btn btn-secondary"
              style={{ marginRight: "10px" }}
              onClick={handleUpdateData}
            >
              Update Data
            </button>
            <button className="btn btn-danger" onClick={handleSubmit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modify;
