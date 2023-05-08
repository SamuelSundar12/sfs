import React, { Fragment, useState } from "react";
import Service from "../Service/Service";

import Tabless from "./Tabless";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Sequences() {
  const nav = useNavigate();
  const [data, setdata] = useState([]);
  const [add, setadd] = useState(false);
  const [type, settype] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [name, setname] = useState({
    name: "",
    description: "",
  });
  let seqtype = ["CUS", "BR", "BANK"];
  const handletype = (e) => {
    settype(e.target.value);
    if (e.target.value === "CUS") {
      setname({
        name: "CUSTOMER",
        description: "CUSTOMER",
      });
    } else if (e.target.value === "BR") {
      setname({
        name: "BRANCH",
        description: "BRANCH",
      });
    } else if (e.target.value === "BANK") {
      setname({
        name: "BANK",
        description: "GLOBAL",
      });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    Service.getSequencebytype(type).then((res) => {
      setdata(res.data);
      setisLoading(false);
    });
  };

  const editsequence = (id) => {
    nav(`/editsequence/${id}`);
  };
  const addsequence = () => {
    setadd(true);
    // nav(`/addsequence`);
  };
  return (
    <div>
      <h1>Sequences</h1>
      <button onClick={addsequence}>ADD</button>
      <form onSubmit={handlesubmit}>
        <label>Sequence Type</label>
        <select onChange={handletype}>
          <option>--Select--</option>
          {seqtype.map((s) => {
            return (
              <option key={s} value={s}>
                {s}
              </option>
            );
          })}
        </select>
        <label>Sequence Name</label>
        <input type="text" value={name.name} readOnly id="sequencetype" />
        <label>Oraganization Level</label>
        <input type="text" value={name.description} readOnly />
        {add ? (
          <>
            {" "}
            <label>Characacter Set</label>
            <input
              type="text"
              maxLength="3"
              style={{ textTransform: "uppercase" }}
              id="charset"
              // onChange={handlechange}
              // readOnly={add ? "" : "readOnly"}
            />
            <label>Name</label>
            <input
              type="text"
              maxLength="15"
              id="chardescription"
              // readOnly={add ? "" : "readOnly"}
              // onChange={handlechange}
            />
            <label>Include charset</label>
            <input
              type="checkbox"
              maxLength="15"
              // disabled={add ? "" : "disabled"}
              // onChange={handleincludechar}
            />
            <button type="submit">Add Sequence</button>
          </>
        ) : (
          <></>
        )}
        <button type="submit">Go</button>
      </form>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Delete</th>
                <th>Edit</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total Width</th>
                <th>Start No</th>
                <th>End No</th>
                <th>Auto ?</th>
                <th>Mod Dt ?</th>
                <th>Op ?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((s) => {
                return (
                  <Fragment key={s.sequencekeyid}>
                    <Tabless
                      editsequence={editsequence}
                      sequencekeyid={s.sequencekeyid}
                      startdate={s.startdate}
                      enddate={s.enddate}
                      totalwidth={s.totalwidth}
                      startno={s.startno}
                      endno={s.endno}
                      applicability={s.applicability}
                      editdocdate={s.editdocdate}
                      openstatus={s.openstatus}
                    />
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Sequences