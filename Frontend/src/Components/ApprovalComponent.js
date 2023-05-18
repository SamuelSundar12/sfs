import React, { useState, useEffect } from "react";
import Service from "../Services/Service";

function ApprovalComponent() {
  const [detailsForApproval, setDetailsForApproval] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDetailsForApproval();
  }, []);

  const fetchDetailsForApproval = () => {
    // Fetch the details for approval from the backend
    Service.getDetailsForApproval()
      .then((res) => {
        setDetailsForApproval(res);
      })
      .catch((error) => {
        console.log("Error fetching details for approval:", error);
      });
  };

  const handleApproval = (status) => {
    setIsLoading(true);

    // Send the approval decision to the backend
    Service.handleApprovalDecision(status)
      .then(() => {
        setApprovalStatus(status);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error handling approval decision:", error);
        setIsLoading(false);
      });
  };

  if (!detailsForApproval) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Details for Approval</h3>
      {/* Render the details for approval */}
      {/* Customize the rendering of the details according to your requirements */}
      <div>{JSON.stringify(detailsForApproval)}</div>

      <div>
        <h4>Approval Decision</h4>
        <button
          onClick={() => handleApproval("approve")}
          disabled={isLoading}
        >
          Approve
        </button>
        <button
          onClick={() => handleApproval("reject")}
          disabled={isLoading}
        >
          Reject
        </button>
        {isLoading && <div>Loading...</div>}
        {approvalStatus && (
          <div>Approval Status: {approvalStatus.toUpperCase()}</div>
        )}
      </div>
    </div>
  );
}

export default ApprovalComponent;
