import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'KFC', value: 400 },
  { name: 'FIAT-Chrysler LLC', value: 300 },
  { name: 'KLM', value: 300 },
  { name: 'Aeroflot', value: 200 },
  { name: 'Lukoil', value: 278 },
  { name: 'American Express', value: 189 },
  { name: 'Daimler', value: 239 }
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
