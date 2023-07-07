import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


import "./Admingraph.css";
import HelloAnimation from "../Adminanimation/Adminanimation"
import Hourglass from "../../Student/Studentassessment/Hourglass"

const Admingraph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate a delay for loading data
    const timeout = setTimeout(() => {
      const newData = [
        {
          name: "2017-2018 ",
          Student: 4000,
          Teacher: 2400,
          amt: 2400,
        },
        {
          name: "2018-2019 ",
          Student: 3000,
          Teacher: 1398,
          amt: 2210,
        },
        {
          name: "2019-2020 ",
          Student: 2000,
          Teacher: 9800,
          amt: 2290,
        },
        {
          name: "2020-2021 ",
          Student: 2780,
          Teacher: 3908,
          amt: 2000,
        },
        {
          name: "2021-2022 ",
          Student: 1890,
          Teacher: 4800,
          amt: 2181,
        },
        {
          name: "2022-2023 ",
          Student: 2390,
          Teacher: 3800,
          amt: 2500,
        },
      ];
      setData(newData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

 
  return (
    <div className="graph-container">
      <div className="exam-container">
        <p className="exam-heading">Enrollment of Users(per year)</p>
      </div>

      <BarChart
        className="bar-chart"
        width={750}
        height={500}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Student" fill="#5272E9" />
        <Bar dataKey="Teacher" fill="#24B0C9" />
      </BarChart>
    </div>
  );
};

export default Admingraph;
