import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Service from "../Services/Service";

function Home() {
  const navigate = useNavigate();
  const [entityTypes, setEntityTypes] = useState([]);
  const [entityType, setEntityType] = useState("");
  const [entityDescription, setEntityDescription] = useState("");

  useEffect(() => {
    // Fetch entity types and descriptions from database
    Service.getEntityTable().then((response) => {
      const entities = response.data.map((entity) => ({
        value: entity.entityType,
        label: entity.entityType,
        entityDescription: entity.entityDescription,
      }));
      setEntityTypes(entities);
      console.log(entities);
    });
  }, []);

  const handleEntityTypeChange = (selectedOption) => {
    // Look up entity description by entity type
    const selectedEntity = entityTypes.find(
      (entity) => entity.value === selectedOption.value
    );
    setEntityType(selectedOption.value);
    setEntityDescription(selectedEntity.entityDescription);
  };

  const entityOptions = entityTypes.map((entityType) => ({
    value: entityType.value,
    label: entityType.label,
    entityDescription: entityType.entityDescription,
  }));

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
    <div>
      <label>Entity Type</label>
      <select
        options={entityOptions}
        value={entityType}
        onChange={handleEntityTypeChange}
      />
      <label>Entity Description</label>
      <input
        type="text"
        value={entityDescription}
        onChange={(e) => setEntityDescription(e.target.value)}
      />
      <br />
      <button type="submit" onClick={handleEntityInfoSubmit}>
        Entity Info
      </button>
      <button type="submit" onClick={handleAddressInfoSubmit}>
        Address Info{" "}
      </button>
      <button type="submit" onClick={handleGstDetailsSubmit}>
        GST Details
      </button>
      <button type="submit" onClick={handleAdditionalInfoSubmit}>
        Entity Additional Information
      </button>
    </div>
  );
}

export default Home;
