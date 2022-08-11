import React, { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [first, setFirst] = useState([]);

  useEffect(() => {
    axios
      .get(`http://admin.ishop.sunhimlabs.com/api/v1/countries/`)
      .then((res) => setFirst(res.data.data));
  }, []);

  return (
    <div>
      {first.map((al) => (
        <tr>{al.name}</tr>
      ))}
    </div>
  );
};

export default Dashboard;
