const express = require('express');
const redis = require('redis');
const { measurements_generate, sensors_generate } = require('./generate_dummy.js'); // Import the generate_dummy_data.js file

const app = express();
const client = redis.createClient(6379);

(async () => {
  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  client.on('ready', () => console.log('Redis is ready'));

  await client.connect();

  await client.ping();
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/measurements', async (req, res) => {
  const cacheKey = 'measurements';
  const data = await client.get(cacheKey);

  if (data != null) {
    // Data available in cache
    res.send(JSON.parse(data));
  } else {
    // Data not available in cache, generate and store
    const measurements = measurements_generate(); // Generate dummy data
    client.setEx(cacheKey, 3600, JSON.stringify(measurements)); // Store data in cache for 1 hour
    res.send(measurements); // Send data as response
  }
});


app.get('/sensors', async (req, res) => {
  const cacheKey = 'sensors';
  const data = await client.get(cacheKey);

  if (data != null) {
    // Data available in cache
    res.send(JSON.parse(data));
  } else {
    // Data not available in cache, generate and store
    const sensors = sensors_generate(); // Generate sensors data
    client.setEx(cacheKey, 3600, JSON.stringify(sensors)); // Store data in cache for 1 hour
    res.send(sensors); // Send data as response
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});