import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2016, Paris: 100, Bangkok: 200, SanFrancisco: 150 },
  { year: 2017, Paris: 150, Bangkok: 250, SanFrancisco: 180 },
  { year: 2018, Paris: 200, Bangkok: 300, SanFrancisco: 210 },
  { year: 2019, Paris: 250, Bangkok: 350, SanFrancisco: 230 }
];

function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Paris" stroke="#8884d8" />
        <Line type="monotone" dataKey="Bangkok" stroke="#82ca9d" />
        <Line type="monotone" dataKey="SanFrancisco" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;