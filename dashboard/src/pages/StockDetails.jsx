import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDailyTimeSeries } from "../services/api";
import StockChart from "../components/StockChart";

export default function StockDetails() {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const json = await fetchDailyTimeSeries(symbol);
        const timeSeries = json["Time Series (Daily)"] || {};
        // Transform into array and sort ascending by date
        const data = Object.entries(timeSeries).map(([date, values]) => ({
          date,
          close: parseFloat(values["4. close"]),
        }));
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setChartData(data);
      } catch (err) {
        setError("Unable to fetch stock data.");
        console.error(err);
      }
    }
    loadData();
  }, [symbol]);

  return (
    <div>
      <h2>{symbol} Price History</h2>
      {error && <p>{error}</p>}
      {chartData.length > 0 && <StockChart data={chartData} />}
    </div>
  );
}