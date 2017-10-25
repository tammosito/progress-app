import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import reverse from "ramda/src/reverse";

const ProgessChart = ({ data }) => {
	const myData = data.map(item => ({
		name: item.itemId,
		value: Number(item.value)
	}));

	return (
		<ResponsiveContainer height={100}>
			<LineChart data={reverse(myData)}>
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
