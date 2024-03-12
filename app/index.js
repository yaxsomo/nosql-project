// index.js

const express = require('express');
const redis = require('redis');
const { MongoClient } = require('mongodb');
const { measurements_generate, sensors_generate } = require('./generate_dummy.js');

const app = express();
const client = redis.createClient(6379);

const mongoClient = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

(async () => {
  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  client.on('ready', () => console.log('Redis is ready'));

  await client.connect();

  try {
    await mongoClient.connect();
    console.log('MongoDB connected successfully');

    const db = mongoClient.db('sensors_db');
    const sensorsCollection = db.collection('sensors');
    const measurementsCollection = db.collection('measurements');

    // Check if sensors collection is empty, if so, insert dummy sensors data
    const sensorsCount = await sensorsCollection.countDocuments();
    if (sensorsCount === 0) {
      const sensorsData = sensors_generate();
      await sensorsCollection.insertMany(sensorsData);
      console.log('Dummy sensors data inserted into MongoDB');
    }

    // Check if measurements collection is empty, if so, insert dummy measurements data
    const measurementsCount = await measurementsCollection.countDocuments();
    if (measurementsCount === 0) {
      const measurementsData = measurements_generate();
      await measurementsCollection.insertMany(measurementsData);

      console.log('Dummy measurements data inserted into MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/measurements', async (req, res) => {
  const cacheKey = 'measurements';
  const data = await client.get(cacheKey);

  if (data != null) {
    res.send(JSON.parse(data));
  } else {
    const measurements = measurements_generate();
    client.setEx(cacheKey, 3600, JSON.stringify(measurements));
    res.send(measurements);
  }
});

app.get('/sensors', async (req, res) => {
  try {
    const db = mongoClient.db('sensors_db');
    const sensorsCollection = db.collection('sensors');
    const sensorsData = await sensorsCollection.find({}).toArray();
    res.send(sensorsData);
  } catch (error) {
    console.error('Error fetching sensors data from MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/joint1', async (req, res) => {
  try {
    const db = mongoClient.db('sensors_db');
    const result = db.collection('sensors').aggregate([
      {
          $lookup: {
              from: "measurements",
              localField: "id",
              foreignField: "sensor_id",
              as: "sensorMeasures"
          }
      }
    ]);
    res.send(result);
  } catch (error) {
    console.error('Error making data joint:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
