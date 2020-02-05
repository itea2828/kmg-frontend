import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
  {
    name: '01', план: 40, факт: 30
  },
  {
    name: '02', план: 39, факт: 29
  },
  {
    name: '03', план: 38, факт: 28
  },
  {
    name: '04', план: 37, факт: 27
  },
  {
    name: '05', план: 36, факт: 26
  },
  {
    name: '06', план: 35, факт: 25
  },
  {
    name: '07', план: 34, факт: 24
  },
  {
    name: '08', план: 33, факт: 23
  },
  {
    name: '09', план: 32, факт: 22
  },
  {
    name: '10', план: 31, факт: 21
  },
  {
    name: '11', план: 30, факт: 20
  },
  {
    name: '12', план: 32, факт: 22
  },
  {
    name: '13', план: 34, факт: 24
  },
  {
    name: '14', план: 36, факт: 34
  },
  {
    name: '15', план: 38, факт: 39
  },
  {
    name: '16', план: 39, факт: 0
  },
  {
    name: '17', план: 40, факт: 0
  },
  {
    name: '18', план: 41, факт: 0
  },
  {
    name: '19', план: 42, факт: 0
  },
  {
    name: '20', план: 43, факт: 0
  },
  {
    name: '21', план: 44, факт: 0
  },
  {
    name: '22', план: 43, факт: 0
  },
  {
    name: '23', план: 42, факт: 0
  },
  {
    name: '24', план: 41, факт: 0
  },
  {
    name: '25', план: 40, факт: 0
  },
  {
    name: '26', план: 39, факт: 0
  },
  {
    name: '27', план: 38, факт: 0
  },
  {
    name: '28', план: 37, факт: 0
  },
  {
    name: '29', план: 36, факт: 0
  },
  {
    name: '30', план: 35, факт: 0
  },
];


const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.план));
  const dataMin = Math.min(...data.map(i => i.план));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

class AreaBar extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';

  render() {
    return (
      <AreaChart
        width={500}
        height={200}
        data={data}
        // margin={{
        //   top: 10, right: 30, left: 0, bottom: 0,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="план" stroke="#000" fill="#39aa6f" fillOpacity="1"/>
        <Area type="monotone" dataKey="факт" stroke="#fff" fill="#184294" fillOpacity="1"/>
      </AreaChart>
    );
  }
}

export default AreaBar;
