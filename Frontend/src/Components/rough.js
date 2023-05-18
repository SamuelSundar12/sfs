import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import { useNavigate, useLocation } from "react-router-dom";

import EntityInfo from './EntityInfo';
import Place from './Place';
import GST from './GST';
import AdditionalInfo from './AdditionalInfo';

function Entity() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setdata] = useState([]);
  const [entityType, setEntityType] = useState({});
  const [entityid, setEntityid] = useState();
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    Service.getEntityTable().then(res => setdata(res))
  }, []);

  useEffect(() => {
    if (entityid) {
      Service.getEntityTableById(entityid).then(res => setEntityType(res))
    } else {
      setEntityType({});
      setShowButtons(false);
    }
  }, [entityid]);

  const handleselect = (e) => {
    setEntityid(parseInt(e.target.value))
  }

  const handleGoButtonClick = () => {
    setShowButtons(true);
  }

  const handleTabClick = (path) => {
    navigate(path);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center font-weight-bold text-primary">Entity Details</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="entityType">Select Entity Type</label>
                <select className="form-control" id="entityType" onChange={handleselect}>
                  <option>--Select--</option>
                  {data.map(e => {
                    return (
                      <option value={e.id} key={e.id}>{e.entitytype}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="entityDescription">Entity Description</label>
                <input type="text" className="form-control" id="entityDescription" value={entityType.entitydescription || ''} onChange={() => {}} readOnly />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" onClick={handleGoButtonClick}>GO</button>
              </div>
              {showButtons && (
                <div>
                  <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/entityinfo" ? "active" : ""}`} onClick={() => handleTabClick("/entityinfo")}>Entity Info</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/addressinfo" ? "active" : ""}`} onClick={() => handleTabClick("/addressinfo")}>Address Info</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/gst" ? "active" : ""}`} onClick={() => handleTabClick("/gst")}>GST Details</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${location.pathname === "/additionalinfo" ? "active ":""}`} onClick={() => handleTabClick("/additionalinfo")}>Additional Info</a>
</li>
</ul>
{location.pathname === "/entityinfo" && <EntityInfo entityid={entityid} />}
{location.pathname === "/addressinfo" && <Place entityid={entityid} />}
{location.pathname === "/gst" && <GST entityid={entityid} />}
{location.pathname === "/additionalinfo" && <AdditionalInfo entityid={entityid} />}
</div>
)}
</div>
</div>
</div>
</div>
</div>
);
}

export default Entity;

import React, { useState } from 'react';
import EntityInfo from './EntityInfo';
import Place from './Place';
import GST from './GST';
import AdditionalInfo from './AdditionalInfo';

function Entity() {
  const [entityInfo, setEntityInfo] = useState({});
  const [place, setPlace] = useState({});
  const [gst, setGst] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [allMandatoryFilled, setAllMandatoryFilled] = useState(false);

  const handleEntityInfoChange = (updatedEntityInfo) => {
    setEntityInfo(updatedEntityInfo);
  };

  const handlePlaceChange = (updatedPlace) => {
    setPlace(updatedPlace);
  };

  const handleGstChange = (updatedGst) => {
    setGst(updatedGst);
  };

  const handleAdditionalInfoChange = (updatedAdditionalInfo) => {
    setAdditionalInfo(updatedAdditionalInfo);
  };

  const handleSave = () => {
    // Save all the details
    console.log('Entity Info:', entityInfo);
    console.log('Place:', place);
    console.log('GST:', gst);
    console.log('Additional Info:', additionalInfo);
  };

  const checkMandatoryFields = () => {
    // Check if all mandatory fields are filled
    if (
      entityInfo.mandatoryField1 &&
      place.mandatoryField2 &&
      gst.mandatoryField3 &&
      additionalInfo.mandatoryField4
    ) {
      setAllMandatoryFilled(true);
    } else {
      setAllMandatoryFilled(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center font-weight-bold text-primary">Entity Details</h3>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#entityInfo">
                    Entity Info
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#place">
                    Place
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#gst">
                    GST
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#additionalInfo">
                    Additional Info
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane container active" id="entityInfo">
                  <EntityInfo onChange={handleEntityInfoChange} />
                </div>
                <div className="tab-pane container fade" id="place">
                  <Place onChange={handlePlaceChange} />
                </div>
                <div className="tab-pane container fade" id="gst">
<GST onChange={handleGstChange} />
</div>
<div className="tab-pane container fade" id="additionalInfo">
<AdditionalInfo onChange={handleAdditionalInfoChange} />
</div>
</div>
</div>
<div className="card-footer">
<button
className="btn btn-primary"
onClick={() => {
checkMandatoryFields();
if (allMandatoryFilled) {
handleSave();
} else {
alert('Please fill all mandatory fields in all tabs');
}
}}
>
Save
</button>
</div>
</div>
</div>
</div>
</div>
);
}

export default Entity;

import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import { useNavigate } from "react-router-dom";
import EntityInfo from './EntityInfo';
import Place from './Place';
import GST from './GST';
import './Tab.css';
import AdditionalInfo from './AdditionalInfo';

function Entity() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [entityType, setEntityType] = useState({});
  const [entityid, setEntityid] = useState();
  const [showButtons, setShowButtons] = useState(false);
  const [go, setgo] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }


  useEffect(() => {
    Service.getEntityTable().then(res => setdata(res))
  }, []);

  useEffect(() => {
    if (entityid) {
      Service.getEntityTableById(entityid).then(res => {setEntityType(res) ;setgo(true)})
    } else {
      setEntityType({});
      setShowButtons(false);
    }
  }, [entityid]);

  const handleselect = (e) => {
    setEntityid(parseInt(e.target.value))
  }

  const handleGoButtonClick = () => {
    if(go){
      setShowButtons(true);
    }
    
  }

  const handleEntityInfoSubmit = () => {
    navigate("/entityinfo");
  };

  const handleAddressInfoSubmit = () => {
    navigate("/addressinfo");
  };

  const handleGstDetailsSubmit = () => {
    navigate("/gst");
  };

  const handleAdditionalInfoSubmit = () => {
    navigate("/additionalinfo");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center font-weight-bold ">Entity Details</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="entityType">Select Entity Type</label>
                <select className="form-control" id="entityType" onChange={handleselect}  readOnly={go ? "readOnly" : ""}>
                  <option>--Select--</option>
                  {data.map(e => {
                    return (
                      <option value={e.id} key={e.id}>{e.entitytype}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="entityDescription">Entity Description</label>
                <input type="text" className="form-control" id="entityDescription" value={entityType.entitydescription || ''} onChange={() => {}} readOnly />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" onClick={handleGoButtonClick}>GO</button>

              </div>

              <div>
      {/* <div style={head}>
              <h5 style={{marginLeft:'35px'}}>Profile 03</h5>
              <p style={{marginRight:'35px',wordSpacing:'5px'}}> <AiIcons.AiFillHome/> <SlIcons.SlArrowRight style={{fontSize:'15px'}}/>Account Profile <SlIcons.SlArrowRight style={{fontSize:'15px'}}/> Profile 03</p>
          </div> */}
      </div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Address
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Contact Info
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Bank Info
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Role Info
          </button>

         
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2></h2>
            
           <EntityInfo/>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            
            <Place/>
               {/* <Billing/>
              <Table/> */}
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2></h2>
            

            <GST/>
              {/* <ChangePassword/>
              <DeleteAccount/>
               */}
          </div>
      
         <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            
            <AdditionalInfo/>
            {/* <Checkbox/>
            <Last/> */}
           
           
          </div>


         
  
          
        </div>
      </div>
              {showButtons && (
                <>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleEntityInfoSubmit}>Entity Info</button>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleAddressInfoSubmit}>Address Info </button>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleGstDetailsSubmit}>GST Details</button>
                  <button type="submit" className="btn btn-primary" onClick={handleAdditionalInfoSubmit}>Entity Additional Information</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entity;


import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import { useNavigate } from "react-router-dom";

function Entity() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [entityType, setEntityType] = useState({});
  const [entityid, setEntityid] = useState();
  const [showButtons, setShowButtons] = useState(false);
  const [go, setgo] = useState(false);


  useEffect(() => {
    Service.getEntityTable().then(res => setdata(res))
  }, []);

  useEffect(() => {
    if (entityid) {
      Service.getEntityTableById(entityid).then(res => {setEntityType(res) ;setgo(true)})
    } else {
      setEntityType({});
      setShowButtons(false);
    }
  }, [entityid]);

  const handleselect = (e) => {
    setEntityid(parseInt(e.target.value))
  }

  const handleGoButtonClick = () => {
    if(go){
      setShowButtons(true);
    }
    
  }

  const handleEntityInfoSubmit = () => {
    navigate("/entityinfo");
  };

  const handleAddressInfoSubmit = () => {
    navigate("/addressinfo");
  };

  const handleGstDetailsSubmit = () => {
    navigate("/gst");
  };

  const handleAdditionalInfoSubmit = () => {
    navigate("/additionalinfo");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center font-weight-bold ">Entity Details</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="entityType">Select Entity Type</label>
                <select className="form-control" id="entityType" onChange={handleselect}  readOnly={go ? "readOnly" : ""}>
                  <option>--Select--</option>
                  {data.map(e => {
                    return (
                      <option value={e.id} key={e.id}>{e.entitytype}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="entityDescription">Entity Description</label>
                <input type="text" className="form-control" id="entityDescription" value={entityType.entitydescription || ''} onChange={() => {}} readOnly />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" onClick={handleGoButtonClick}>GO</button>
                
              </div>
              {showButtons && (
                <>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleEntityInfoSubmit}>Entity Info</button>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleAddressInfoSubmit}>Address Info </button>
                  <button type="submit" className="btn btn-primary mr-3" onClick={handleGstDetailsSubmit}>GST Details</button>
                  <button type="submit" className="btn btn-primary" onClick={handleAdditionalInfoSubmit}>Entity Additional Information</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entity;
import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useNavigate } from "react-router-dom";

function Query() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [tab1, settab1] = useState(false);
  const [tab2, settab2] = useState(false);

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
  const handlestatus = () => {
    if (selectedData && selectedData.residentialCode === 1) {
      return "Indian Resident";
    } else {
      return "Non Indian Resident";
    }
  };
  const handlecheck = () => {
    if (selectedData && selectedData.entityLifeBlockRecordId === 1) {
      return true;
    } else {
      return false;
    }
  };
  console.log();
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
            <button
              onClick={() => {
                settab1(false);
                settab2(false);
              }}
            >
              Entity info
            </button>
            <button
              onClick={() => {
                settab1(true);
                settab2(true);
              }}
            >
              Address Info
            </button>
            <button
              onClick={() => {
                settab1(true);
                settab2(false);
              }}
            >
              Entity AdditionalInfo
            </button>
            <button
              onClick={() => {
                settab1(false);
                settab2(true);
              }}
            >
              GST Details
            </button>
            <div className="card">
              <div className="card-header">
                {!tab1 && !tab2 && (
                  <span className="EI" style={{ color: "blue" }}>
                    <h4> Entity Info</h4>
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
                          <label>Residental Status:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={handlestatus()}
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
                            checked={handlecheck()}
                            readOnly
                          />
                        </div>
                      </div>

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
                  </span>
                )}

                {tab1 && tab2 && (
                  <span className="EI" style={{ color: "blue" }}>
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
                  </span>
                )}

                {tab1 && !tab2 && (
                  <span className="EI" style={{ color: "blue" }}>
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
                  </span>
                )}
              </div>

              {!tab1 && tab2 && (
                <span className="EI" style={{ color: "blue" }}>
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
                </span>
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
  const [countryid, setcountryid] = useState();
  const [states, setstates] = useState([]);
  const [City, setCity] = useState([]);
  const [cityid, setCityid] = useState();

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

    if (cityid) {
      Service.getCityByCityId(cityid).then((res) =>
        setSelectedData({ ...selectedData, city: res })
      );
    }
  }, [branchid, constitutionid, cityid, stateid]);
  useEffect(() => {
    if (selectedData?.city?.state?.stateid) {
      Service.getCityById(selectedData?.city?.state?.stateid).then((res) => {
        console.log(res);
        setCity(res);
      });
    }
  }, [selectedData?.city?.state?.stateid]);
  useEffect(() => {
    
  }, [selectedData?.city?.state?.country?.countryid]);
  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };
  const handleselect2 = (e) => {
    setSelectedData({ ...selectedData, [e.target.id]: e.target.value });
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

  const handleUpdateData = () => {
    console.log(JSON.stringify(selectedData));
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
              onClick={() => {
                setTab1(false);
                setTab2(false);
              }}
            >
              Entity info
            </button>
            <button
              onClick={() => {
                setTab1(true);
                setTab2(true);
              }}
            >
              Address Info
            </button>
            <button
              onClick={() => {
                setTab1(true);
                setTab2(false);
              }}
            >
              Entity AdditionalInfo
            </button>
            <button
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
                  <span className="EI" style={{ color: "blue" }}>
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
                  <span className="EI" style={{ color: "blue" }}>
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
                              <input
                                type="text"
                                className="form-control"
                                name="dasEmployer"
                                value={selectedData.dasEmployer}
                                onChange={handleInputChange}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </span>
                )}
              </div>

              {!tab1 && tab2 && (
                <span className="EI" style={{ color: "blue" }}>
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
                              name="gSTdetails.gstStateName"
                              value={selectedData.gSTdetails.gstStateName}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.gstStateCode"
                              value={selectedData.gSTdetails.gstStateCode}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.gstinNo"
                              value={selectedData.gSTdetails.gstinNo}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.authorizedPerson"
                              value={selectedData.gSTdetails.authorizedPerson}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.gstinAddress"
                              value={selectedData.gSTdetails.gstinAddress}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.mobileNo"
                              value={selectedData.gSTdetails.mobileNo}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.mailId"
                              value={selectedData.gSTdetails.email}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name="gSTdetails.status"
                              value={selectedData.gSTdetails.status}
                              onChange={handleInputChange}
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
            <button className="btn btn-primary" onClick={handleUpdateData}>
              Update Data
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modify;
