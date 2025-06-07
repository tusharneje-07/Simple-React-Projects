import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export default function ContributionChart({ dates = [], counts = [] }) {
  if (!Array.isArray(dates) || !Array.isArray(counts) || dates.length === 0) {
    return <p className="text-gray-500">No data available to display.</p>;
  }

  const chartData = dates.map((date, i) => ({
    date,
    count: counts[i] || 0,
  }));

  return (
    <div className="w-full h-96 bg-gray-100 rounded-2xl shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" /> {/* grid lines color */}
          <XAxis dataKey="date" stroke="#6B7280" /> {/* axis text color */}
          <YAxis stroke="#6B7280" allowDecimals={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', borderRadius: '8px', color: 'white' }}
            labelStyle={{ color: '#9CA3AF' }}
            itemStyle={{ color: '#FBBF24' }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#3B82F6" // change line color here
            strokeWidth={3}
            dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
