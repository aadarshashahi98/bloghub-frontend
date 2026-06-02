"use client";
import { LineChart } from '@mantine/charts';

// Fake blog analytics data
const data = [
  { month: "Jan", views: 1200, posts: 12 },
  { month: "Feb", views: 2100, posts: 18 },
  { month: "Mar", views: 1800, posts: 15 },
  { month: "Apr", views: 3200, posts: 25 },
  { month: "May", views: 4100, posts: 30 },
  { month: "Jun", views: 5200, posts: 40 },
  { month: "Jul", views: 6100, posts: 44 },
  { month: "Aug", views: 7200, posts: 50 },
  { month: "Sep", views: 6800, posts: 46 },
  { month: "Oct", views: 7900, posts: 55 },
  { month: "Nov", views: 8600, posts: 60 },
  { month: "Dec", views: 9400, posts: 70 },
];

export default function BlogViewsChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md m-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Blog Analytics
        </h2>

        <p className="text-sm text-gray-500">
          Monthly views growth of PostHub
        </p>
      </div>

      <LineChart
        h={350}
        data={data}
        dataKey="month"
        series={[
          {
            name: "views",
            label: "Blog Views",
          },
        ]}
        type="gradient"
        gradientStops={[
          { offset: 0, color: "indigo.6" },
          { offset: 30, color: "blue.6" },
          { offset: 60, color: "cyan.5" },
          { offset: 100, color: "teal.5" },
        ]}
        strokeWidth={5}
        curveType="natural"
        valueFormatter={(value) => `${value.toLocaleString()} views`}
      />
    </div>
  );
}