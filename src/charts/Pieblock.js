import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'АО "ОзенМунайГаз"', value: 3400 },
  { name: 'АО "Каражанбасмунай"', value: 1300 },
  { name: 'ТОО "КазГерМунай"', value: 2300 },
  { name: 'АО "ЭмбаМунайГаз"', value: 1200 },
  { name: 'АО "Мангистаумунайгаз"', value: 500 },
  { name: 'ТОО "Казтуркмунайгаз"', value: 3400 },
  { name: 'ТОО "Казахойл Актобе"', value: 2150 },
  { name: 'ПетроКазахстан Инк', value: 2300 },
  { name: 'Амангельды Газ', value: 1100 },
];

const COLORS = ['#0088FE', 
    '#55d8fe', 
    '#5ee2a0', 
    '#fed980', 
    '#a3a0fb', 
    '#e06765', 
    '#3b86ff', 
    '#069ea2', 
    '#cb5499',
    '#ff9769'
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 4) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const white = "#FFFFFF"

  return (
    <g>
      <text className="total-num" x={cx} y={cy} dy={5} textAnchor="middle" fill={white}>16 261</text>
      <text className="total-typ" x={cx} y={cy} dy={17} textAnchor="middle" fill={white}>единиц</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text className="text-io" x={ex + (cos >= 0 ? 1 : -1) * 1} y={ey} dy={0} textAnchor={textAnchor} fill="#fafafa">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <text className="total-name" x={cx} y={cy} dy={120} textAnchor="middle" fill={white}> {payload.name} - {payload.value}ед.</text>
    </g>
  );
};


class Pieblock extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
        <ResponsiveContainer 
            width='99%' 
            aspect={1}
        >
            <PieChart className="pies">
                <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={130}
                cy={100}
                innerRadius={35}
                outerRadius={55}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onPieEnter}>
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                
            </PieChart>
        </ResponsiveContainer>
      
    );
  }
}

export default Pieblock;