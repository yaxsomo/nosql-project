# NoSQL Project

## Overview

This project involves generating dummy data for various sensors and storing it in a NoSQL database. Below are the sensors used in this project along with their data formats:

## Sensors and Data Formats

### Lidar (SICK TiM150-3010300)

```json
{
  "sensor_type": "Lidar",
  "model": "SICK TiM150-3010300",
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
  "sensor_type": "IMU",
  "model": "Bosch BNO055",
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
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
```
### Barometer (Bosh BME680)
```json
{
  "sensor_type": "Barometer",
  "model": "Bosch BME680",
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "pressure": 1013.25,
  "temperature": 23.5,
  "humidity": 45.6,
  "gas_resistance": 120.0
}

```
### GPS (SAM-M10Q-00B)
```json
{
  "sensor_type": "GPS",
  "model": "SAM-M10Q-00B",
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "altitude": 50.0,
  "speed": 0.0
}
```
### Ultrasonic Sensor (HC-SR04)
```json
{
  "sensor_type": "Ultrasonic Sensor",
  "model": "HC-SR04",
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "distance": 10.2
}
```




