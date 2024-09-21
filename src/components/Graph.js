import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function Graph() {
  return (
    <div className="graph1">
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
    //   width={600}
    //   height={300}
      ></LineChart>
</div>
  );
}
