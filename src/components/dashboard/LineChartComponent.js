import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2016, Signups: 320, Attended: 210, Graduated: 145 },
  { year: 2017, Signups: 450, Attended: 300, Graduated: 200 },
  { year: 2018, Signups: 500, Attended: 350, Graduated: 250 },
  { year: 2019, Signups: 480, Attended: 360, Graduated: 270 },
  { year: 2020, Signups: 550, Attended: 400, Graduated: 300 },
  { year: 2021, Signups: 600, Attended: 450, Graduated: 350 },
  { year: 2022, Signups: 520, Attended: 400, Graduated: 320 },
  { year: 2023, Signups: 580, Attended: 420, Graduated: 360 },
  { year: 2024, Signups: 610, Attended: 460, Graduated: 380 }
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
        <Line type="monotone" dataKey="Signups" stroke="#8884d8" />
        <Line type="monotone" dataKey="Attended" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Graduated" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;