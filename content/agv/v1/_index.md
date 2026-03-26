---
title: "ALTER Rover V1"
description: "The original flagship rescue rover"
version: "V1"
image: "/images/posts/pic1.jpg"
color: "#FF4500"
dimensions:
  length: "0.75 m"
  breadth: "0.55 m"
  height: "0.35 m"
mass: "28 kg"
top_speed: "1.2 m/s"
dof: "4 (Surge, Sway, Yaw, Pitch)"
compute:
  - "Raspberry Pi 4 Model B (8GB)"
  - "NVIDIA Jetson Nano 4GB"
  - "Arduino Mega 2560"
sensors:
  - "RPLiDAR A1M8 360° LiDAR"
  - "Intel RealSense D435i Depth Camera"
  - "MPU-9250 9-DOF IMU"
  - "HC-SR04 Ultrasonic Sensors (x6)"
propulsion:
  - "12V DC Geared Motors (x4)"
  - "L298N Motor Drivers (x2)"
  - "Mecanum Wheels (100mm)"
navigation:
  - "RPLiDAR A1M8 for SLAM"
  - "MPU-9250 IMU"
  - "Wheel Encoders (x4)"
  - "GPS Module (NEO-6M)"
vision:
  - "Intel RealSense D435i (Forward)"
  - "Raspberry Pi Camera Module V2 (Downward)"
  - "Thermal Camera (MLX90640)"
communication:
  - "2.4 GHz Wi-Fi (802.11n)"
  - "LoRa Module (SX1278) for Long-Range"
  - "USB Telemetry Radio"
manipulators:
  - "2-DOF Robotic Arm"
  - "Servo Gripper (MG996R)"
power:
  - "11.1V 5200mAh LiPo Battery (x2)"
  - "5V/3A BEC Voltage Regulator"
  - "Battery Voltage Monitor"
software:
  - "Robot Operating System (ROS Noetic)"
  - "Ubuntu 20.04 LTS"
  - "Python 3.8 / C++"
  - "OpenCV 4.5"
---
