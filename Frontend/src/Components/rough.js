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
