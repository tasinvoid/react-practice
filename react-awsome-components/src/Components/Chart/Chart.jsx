import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const [websiteTraffic, setWebsiteTraffic] = useState([]);
  useEffect(() => {
    fetchWebsiteTraffic();
  }, []);
  async function fetchWebsiteTraffic() {
    let res = await fetch("websiteTraffic.json");
    let data = await res.json();
    setWebsiteTraffic(data);
  }
  console.log(websiteTraffic);
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row ">
      <div className="p-10">
        <h3 className="p-5">Number of Daily Active Users</h3>
        <LineChart
          width={window.innerWidth / 1.2}
          height={300}
          data={websiteTraffic}
        >
          <Line type="monotone" dataKey="page_views" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </div>
      <div className="p-10">
        <h3 className="p-5">Number of Daily Active Users and new users</h3>
        <ResponsiveContainer width={window.innerWidth / 1.2} height={300}>
          <LineChart width={500} height={300} data={websiteTraffic}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#8884d8" />
            <Line type="monotone" dataKey="unique_visitors" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
