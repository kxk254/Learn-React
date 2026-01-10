import { Link } from "react-router-dom";

const defaultSymbols = ["AAPL", "GOOGL", "MSFT", "TSLA"];

export default function StockList() {
  return (
    <ul>
      {defaultSymbols.map((symbol) => (
        <li key={symbol}>
          <Link to={`/stock/${symbol}`}>{symbol}</Link>
        </li>
      ))}
    </ul>
  );
}