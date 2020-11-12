const { portfolio, watchlist } = require('./stocks.json');

for (let stock of portfolio) {
  const { price, low } = stock;
  const buyThreshold = (low * 0.4) + low;
  if (price <= buyThreshold) {
    const buffer = ((price - low) / low) * 100;
    console.log(`${stock.symbol} is at ${buffer}`);
  }
}
