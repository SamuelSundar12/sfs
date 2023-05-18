import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useNavigate } from "react-router-dom";
import EntityInfo from "./EntityInfo";
import AddressInfo from "./Place";
import GstDetails from "./GST";
import AdditionalInfo from "./AdditionalInfo";

function Entity() {
  const [Entity, setEntity] = useState({});
  const [branchid, setbranchid] = useState();
  const [constitutionid, setConstitutionid] = useState();
  const [countryid, setCountryid] = useState();
  const [cityid, setCityid] = useState();
  const [stateid, setStateid] = useState();
  const [locationid, setlocationid] = useState();
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [entityType, setEntityType] = useState({});
  const [entityid, setEntityid] = useState();
  const [showButtons, setShowButtons] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [go, setgo] = useState(false);

  useEffect(() => {
    Service.getEntityTable().then((res) => setdata(res));
  }, []);

  useEffect(() => {
    if (entityid) {
      Service.getEntityTableById(entityid).then((res) => {
        setEntityType(res);
        setgo(true);
        setEntity({ ...Entity, entityTable: res });
      });
    } else {
      setEntityType({});
      setShowButtons(false);
    }
  }, [entityid]);
  useEffect(() => {
    if (branchid) {
      Service.getBranchByBranchid(branchid).then((res) =>
        setEntity({ ...Entity, branch: res })
      );
    }
  }, [branchid]);
  useEffect(() => {
    if (cityid) {
      Service.getCityByCityId(cityid).then((res) => {
        setEntity({ ...Entity, city: res });
        console.log(res);
      });
    }
  }, [cityid]);

  useEffect(() => {
    if (constitutionid) {
      Service.getConstitutionById(constitutionid).then((res) =>
        setEntity({ ...Entity, constitution: res })
      );
    }
  }, [constitutionid]);
  const handleSelect = (e) => {
    setEntityid(parseInt(e.target.value));
  };
  const location = (e) => {
    setlocationid(e.target.value);
  };

  const handlechange = (e) => {
    setEntity({
      ...Entity,
      entityCode: entityType.entitydescription,
      [e.target.id]: e.target.value,
    });
  };
  const handlegst = (e) => {
    setEntity({
      ...Entity,
      gSTdetails: { ...Entity.gSTdetails, [e.target.id]: e.target.value },
    });
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleGoButtonClick = () => {
    if (go) {
      setShowButtons(true);
    }
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(Entity));
    Service.postEntityDetails(Entity).then(() => {
      alert("data is added");
      navigate("/success");
    });
  };

  const handleselect = (e) => {
    setbranchid(e.target.value);
  };
  const handleselect1 = (e) => {
    setConstitutionid(e.target.value);
  };
  const handleselect2 = (e) => {
    setEntity({ ...Entity, [e.target.id]: e.target.value });
  };
  const handleselect4 = (e) => {
    setCityid(e.target.value);
    setEntity({ ...Entity, [e.target.id]: e.target.value });
  };
  const handleselect5 = (e) => {
    setEntity({ ...Entity, [e.target.id]: e.target.value });
  };
  const handlestatus = (e) => {
    if (e.target.checked) {
      setEntity({ ...Entity, [e.target.id]: "1" });
    } else {
      setEntity({ ...Entity, [e.target.id]: "0" });
    }
  };
  return (
    <>
      <div className="container mt-7">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center font-weight-bold ">
                  Entity Details
                </h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="entityType">Select Entity Type</label>
                  <select
                    className="form-control"
                    id="entityType"
                    onChange={handleSelect}
                    disabled={go ? "readOnly" : ""}
                  >
                    <option>--Select--</option>
                    {data.map((e) => {
                      return (
                        <option value={e.id} key={e.id}>
                          {e.entitytype}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="entityDescription">Entity Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="entityDescription"
                    value={entityType.entitydescription || ""}
                    readOnly
                  />
                </div>
                <br />
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={handleGoButtonClick}
                  >
                    GO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButtons && (
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "entity" ? "active" : ""}`}
              onClick={() => handleTabClick("entity")}
            >
              Entity Info
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "address" ? "active" : ""}`}
              onClick={() => handleTabClick("address")}
            >
              Address Info
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "gst" ? "active" : ""}`}
              onClick={() => handleTabClick("gst")}
            >
              GST Details
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "additional" ? "active" : ""
              }`}
              onClick={() => handleTabClick("additional")}
            >
              Entity Additional Information
            </button>
          </li>
        </ul>
      )}
      {activeTab === "entity" && (
        <EntityInfo
          entityType={entityType}
          setEntityType={setEntityType}
          handleselect={handleselect}
          handleselect1={handleselect1}
          handlechange={handlechange}
          handlestatus={handlestatus}
        />
      )}
      {activeTab === "address" && (
        <AddressInfo
          entityType={entityType}
          setEntityType={setEntityType}
          handlechange={handlechange}
          handleselect2={handleselect2}
          handleselect4={handleselect4}
          handleselect5={handleselect5}
        />
      )}
      {activeTab === "gst" && (
        <GstDetails
          entityType={entityType}
          setEntityType={setEntityType}
          handlegst={handlegst}
          handlechange={handlechange}
        />
      )}
      {activeTab === "additional" && (
        <AdditionalInfo
          entityType={entityType}
          setEntityType={setEntityType}
          handlechange={handlechange}
        />
      )}
      {showButtons && activeTab === "additional" && (
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}
export default Entity;
