import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const ProgessChart = ({ data }) => {
	const myData = data.reverse().map(item => ({
		name: item.itemId,
		value: Number(item.value)
	}));

	return (
		<ResponsiveContainer height={100}>
			<LineChart data={myData}>
				<Line
					type="monotone"
					dataKey="value"
					stroke="#ffffff"
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ProgessChart;
