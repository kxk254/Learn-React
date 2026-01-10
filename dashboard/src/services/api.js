const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY";
const BASE_URL = "https://www.alphavantage.co/query";

export async function fetchDailyTimeSeries(symbol) {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
}