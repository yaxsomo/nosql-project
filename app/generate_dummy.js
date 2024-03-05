// generate_dummy_data.js


const N_ELEMENTS = 100

function measurements_generate() {
    const lidarData = [];
    const imuData = [];
    const barometerData = [];
    const gpsData = [];
    const ultrasonicData = [];
  
    // Generate dummy data for Lidar sensor
    for (let i = 0; i < N_ELEMENTS; i++) {
      lidarData.push({
        sensor_id: 1,
        timestamp: new Date().toISOString(),
        measurement: {
          distance: Math.random() * 9.9 + 0.1, // Range: 0.1m to 10m
          angle: Math.random() * 360
        }
      });
    }
  
    // Generate dummy data for 9-Axis IMU sensor
    for (let i = 0; i < N_ELEMENTS; i++) {
      imuData.push({
        sensor_id: 2,
        timestamp: new Date().toISOString(),
        measurement: {
          acceleration: {
            x: Math.random() * 20 - 10, // Range: -10 m/s^2 to 10 m/s^2
            y: Math.random() * 20 - 10,
            z: Math.random() * 20 - 10
          },
          gyroscope: {
            x: Math.random() * 0.1 - 0.05, // Range: -0.05 rad/s to 0.05 rad/s
            y: Math.random() * 0.06 - 0.03, // Range: -0.03 rad/s to 0.03 rad/s
            z: Math.random() * 0.04 - 0.02 // Range: -0.02 rad/s to 0.02 rad/s
          },
          magnetometer: {
            x: Math.random() * 100 - 50, // Range: -50 μT to 50 μT
            y: Math.random() * 100 - 50,
            z: Math.random() * 100 - 50
          }
        }
      });
    }
  
    // Generate dummy data for Barometer sensor
    for (let i = 0; i < N_ELEMENTS; i++) {
      barometerData.push({
        sensor_id: 3,
        timestamp: new Date().toISOString(),
        measurement: {
          pressure: Math.random() * 800 + 300, // Range: 300hPa to 1100hPa
          temperature: Math.random() * 125 - 40, // Range: -40°C to +85°C
          humidity: Math.random() * 100, // Range: 0% to 100%
          gas_resistance: Math.random() * 1000 // Range: 0Ω to 1000Ω
        }
      });
    }
  
    // Generate dummy data for GPS sensor
    for (let i = 0; i < N_ELEMENTS; i++) {
      gpsData.push({
        sensor_id: 4,
        timestamp: new Date().toISOString(),
        measurement: {
          latitude: Math.random() * 180 - 90, // Range: -90° to +90°
          longitude: Math.random() * 360 - 180, // Range: -180° to +180°
          altitude: Math.random() * 100, // Range: 0m to 100m
          speed: Math.random() * 50 // Range: 0m/s to 50m/s
        }
      });
    }
  
    // Generate dummy data for Ultrasonic Sensor
    for (let i = 0; i < N_ELEMENTS; i++) {
      ultrasonicData.push({
        sensor_id: 5,
        timestamp: new Date().toISOString(),
        measurement: {
          distance: Math.random() * 398 + 2 // Range: 2cm to 400cm
        }
      });
    }
  
    return {
      lidarData,
      imuData,
      barometerData,
      gpsData,
      ultrasonicData
    };
  }
  
// generate_dummy_data.js

function sensors_generate() {
    return [
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
    ];
  }
  
  module.exports = {
    measurements_generate, sensors_generate
  };
  
