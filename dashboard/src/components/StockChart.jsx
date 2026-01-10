import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function StockChart({ data }) {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="close" stroke="#8884d8" />
    </LineChart>
  );
}