import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload;
        const formattedAmount = Number(item.amount).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        });

        return (
            <div className="bg-white border border-gray-200 rounded shadow p-2 text-sm">
                <div className="font-semibold">{item.name}</div>
                <div>Amount: {formattedAmount}</div>
                <div>Percentage: {item.value}%</div>
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ data }) => (
    <div className="flex flex-wrap gap-4 text-sm mt-2 md:absolute md:top-4 md:right-4 md:mt-0">
        {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-2">
                <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                />
                <span>{entry.name}</span>
            </div>
        ))}
    </div>
);

const renderInsideLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.6; // controls distance from center
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fontWeight={500}
        >
            {`${name} (${(percent * 100).toFixed(0)}%)`}
        </text>
    );
};


const AssetAllocationChart = React.memo(({ data }) => (
    <Card className="p-4 mb-4 relative">
        <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-lg font-semibold mb-2 md:mb-0">Asset Allocation</h2>
            <CustomLegend data={data} />
        </div>

        <div className="w-full h-[300px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        label={renderInsideLabel}
                        labelLine={false}
                        outerRadius={100}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </Card>
));

export default AssetAllocationChart;
