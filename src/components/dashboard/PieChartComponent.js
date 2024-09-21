import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Asian', value: 213 },
  { name: 'White', value: 398 },
  { name: 'Black', value: 287 },
  { name: 'Hispanic', value: 245 },
  { name: 'Other', value: 154 },
  { name: 'Mixed', value: 97 },
  { name: 'Native American', value: 46 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6361', '#FF4D4D', '#4CAF50'];

function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;