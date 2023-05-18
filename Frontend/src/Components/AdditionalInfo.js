import React, { useState } from "react";

function AdditionalInfo(props) {
  return (
    <div>
      <h2>Entity Additional Information</h2>
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
              <select id="dasEmployer" onChange={props.handlechange}>
                <option value="">--SELECT--</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdditionalInfo;
