import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2018', план: 23362, факт: 26303,
  },
  {
    name: '2019', план: 23362, факт: 26303,
  },
  {
    name: '2020', план: 23362, факт: 26303,
  },
];

class Barrio extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <BarChart
        width={300}
        height={150}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="факт" fill="#115ed9" />
        <Bar yAxisId="right" dataKey="план" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Barrio