import React, { useEffect, useState } from "react";

function Nav() {
  const [date, setdate] = useState("");
  const Today = Date().slice(0, 15);
  useEffect(() => {
    setdate(Today);
  });
  return (
    <div className="navs">
      <h4>MAS009C</h4>

      <p>
        <span>Date : </span>
        {date}
      </p>
    </div>
  );
}

export default Nav;
