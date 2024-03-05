# NoSQL Project

## Overview

This project involves generating dummy data for various sensors and storing it in a NoSQL database. Below are the sensors used in this project along with their data formats:

## Sensors and Data Formats

### Lidar (SICK TiM150-3010300)

```json
{
  "sensor_id": 1,
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "measurement": {
    "distance": 25.3,
    "angle": 45.6
  }
}

```
### 9-Axis IMU (Bosh BNO055)
```json
{
  "sensor_id": 2,
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "measurement": {
    "acceleration": {
      "x": 0.1,
      "y": 0.2,
      "z": 9.8
    },
    "gyroscope": {
      "x": -0.05,
      "y": 0.03,
      "z": -0.02
    },
    "magnetometer": {
      "x": -23.1,
      "y": 45.2,
      "z": -12.5
    }
  }
}
```
### Barometer (Bosh BME680)
```json
{
  "sensor_id": 3,
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "measurement": {
    "pressure": 1013.25,
    "temperature": 23.5,
    "humidity": 45.6,
    "gas_resistance": 120.0
  }
}

```
### GPS (SAM-M10Q-00B)
```json
{
  "sensor_id": 4,
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "measurement": {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "altitude": 50.0,
    "speed": 0.0
  }
}
```
### Ultrasonic Sensor (HC-SR04)
```json
{
  "sensor_id": 5,
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "measurement": {
    "distance": 10.2
  }
}
```


## Sensors Details
```json
[
  {
    "id": 1,
    "name": "Lidar",
    "type": "Distance Sensor",
    "manufacturer": "SICK",
    "model": "TiM150-3010300",
    "details": {
      "range": "0.1m to 10m",
      "accuracy": "±0.1%"
    }
  },
  {
    "id": 2,
    "name": "9-Axis IMU",
    "type": "Inertial Measurement Unit",
    "manufacturer": "Bosch",
    "model": "BNO055",
    "details": {
      "axes": 9,
      "communication": ["I2C", "SPI"]
    }
  },
  {
    "id": 3,
    "name": "Barometer",
    "type": "Atmospheric Pressure Sensor",
    "manufacturer": "Bosch",
    "model": "BME680",
    "details": {
      "measures": ["pressure", "temperature", "humidity", "gas resistance"]
    }
  },
  {
    "id": 4,
    "name": "GPS",
    "type": "Global Positioning System",
    "manufacturer": "UBlox",
    "model": "SAM-M10Q-00B",
    "details": {
      "tracking_channels": 22
    }
  },
  {
    "id": 5,
    "name": "Ultrasonic Sensor",
    "type": "Distance Sensor",
    "manufacturer": "Unknown",
    "model": "HC-SR04",
    "details": {
      "range": "2cm to 400cm",
      "resolution": "0.3cm",
      "accuracy": "±3mm"
    }
  }
]
```

