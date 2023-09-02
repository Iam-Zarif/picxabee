'use client';
import React, { useEffect, useState } from 'react';
import Loading from './loading';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	PolarRadiusAxis,
} from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';
import { BarChart, Bar, Cell } from 'recharts';

import { ComposedChart, Line, Legend } from 'recharts';

const Activities = () => {
	//
	// json for chart
	const data = [
		{
			name: 'January',
			uv: 800,
			pv: 800,
			amt: 800,
		},
		{
			name: 'February',
			uv: 967,
			pv: 967,
			amt: 967,
		},
		{
			name: 'march',
			uv: 1098,
			pv: 1098,
			amt: 1098,
		},
		{
			name: 'April',
			uv: 1200,
			pv: 1200,
			amt: 1200,
		},
		{
			name: 'may',
			uv: 1108,
			pv: 1108,
			amt: 1108,
		},
		{
			name: 'June',
			uv: 1400,
			pv: 1400,
			amt: 1400,
		},
	];

	const data1 = [
		{
			subject: 'January',
			A: 120,
			B: 110,
			fullMark: 150,
		},
		{
			subject: 'february',
			A: 98,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'March',
			A: 86,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'April',
			A: 99,
			B: 100,
			fullMark: 150,
		},
		{
			subject: 'May',
			A: 85,
			B: 90,
			fullMark: 150,
		},
		{
			subject: 'June',
			A: 65,
			B: 85,
			fullMark: 150,
		},
	];

	const data2 = [
		{
			name: '18-24',
			uv: 31.47,
			pv: 2400,
			fill: '#8884d8',
		},
		{
			name: '25-29',
			uv: 26.69,
			pv: 4567,
			fill: '#83a6ed',
		},
		{
			name: '30-34',
			uv: 15.69,
			pv: 1398,
			fill: '#8dd1e1',
		},
		{
			name: '35-39',
			uv: 8.22,
			pv: 9800,
			fill: '#82ca9d',
		},
		{
			name: '40-49',
			uv: 8.63,
			pv: 3908,
			fill: '#a4de6c',
		},
		{
			name: '50+',
			uv: 2.63,
			pv: 4800,
			fill: '#d0ed57',
		},
		{
			name: 'unknow',
			uv: 6.67,
			pv: 4800,
			fill: '#ffc658',
		},
	];

	const data3 = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	// const style = {
	//   top: '50%',
	//   right: 0,
	//   transform: 'translate(0, -50%)',
	//   lineHeight: '24px',
	// };

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		// Simulate an asynchronous operation (e.g., fetching data)
		setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Simulated 2-second delay
	}, []);
	return (
		<>
			<div>
				{isLoading ? (
					<div className="">
						<Loading />
					</div>
				) : (
					<div className="mb-80">
						<p className="text-4xl text-center name mt-4 font-bold">
							Users Activities
						</p>
						{/* Chart */}
						<div className="flex flex-col   mt-12 gap-8">
							<div className="flex gap-8 mx-auto">
								<div
									className="shadow-slate-600 shadow-lg  py-10   glass rounded-2xl"
									style={{ width: 550, height: 350 }}
								>
									<p className="text-center  font-bold text-xl ">
										Users Per Month
									</p>
									<ResponsiveContainer>
										<ComposedChart
											width={500}
											height={400}
											data={data}
											margin={{
												top: 20,
												right: 20,
												bottom: 20,
												left: 20,
											}}
										>
											<CartesianGrid stroke="#f5f5f5" />
											<XAxis dataKey="name" scale="band" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Area
												type="monotone"
												dataKey="amt"
												fill="#8884d8"
												stroke="#8884d8"
											/>
											<Bar dataKey="pv" barSize={20} fill="#413ea0" />
											<Line type="monotone" dataKey="uv" stroke="#ff7300" />
										</ComposedChart>
									</ResponsiveContainer>
								</div>
								<div
									className="shadow-slate-600 shadow-lg  py-10   glass rounded-2xl"
									style={{ width: 550, height: 350 }}
								>
									<p className="text-center  font-bold text-xl ">
										Posts Per Month
									</p>
									<ResponsiveContainer className=" " width="100%" height="100%">
										<RadarChart
											cx="50%"
											cy="50%"
											outerRadius="80%"
											data={data1}
										>
											<PolarGrid />
											<Tooltip />
											<Legend />
											<PolarAngleAxis dataKey="subject" />
											<PolarRadiusAxis />
											<Radar
												className=""
												name="users"
												dataKey="A"
												stroke="#8884d8"
												fill="#8884d8"
												fillOpacity={0.6}
											/>
										</RadarChart>
									</ResponsiveContainer>
								</div>
							</div>

							{/* <div className='flex gap-8 mx-auto'>
        <div className='shadow-slate-600 shadow-lg  py-10   glass rounded-2xl' style={{ width: 550, height: 350 }}>
         <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data2}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
         </div>
          
          <div className='shadow-slate-600 shadow-lg w-full h-full py-10   glass rounded-2xl' style={{ width: 550, height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data3}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
          </div>
        </div> */}
						</div>
						{/* Chart */}
					</div>
				)}
			</div>
		</>
	);
};

export default Activities;
