---
title: "ALTER Rover V2"
description: "Enhanced mobility and sensor suite"
version: "V2"
image: "images/posts/pic4.png"
color: "#FF6A00"
dimensions:
  length: "0.82 m"
  breadth: "0.60 m"
  height: "0.40 m"
mass: "35 kg"
top_speed: "1.5 m/s"
dof: "6 (Surge, Sway, Heave, Roll, Pitch, Yaw)"
compute:
  - "Intel NUC i5-1135G7"
  - "NVIDIA Jetson Xavier NX 8GB"
  - "STM32F4 Microcontroller"
sensors:
  - "Velodyne VLP-16 3D LiDAR"
  - "Intel RealSense D455 Depth Camera"
  - "BNO055 9-DOF IMU"
  - "IR Distance Sensors (x8)"
propulsion:
  - "Brushless DC Motors (x6)"
  - "ODrive Motor Controllers (x3)"
  - "Custom Track System with Flippers"
navigation:
  - "Velodyne VLP-16 for 3D SLAM"
  - "BNO055 Absolute Orientation IMU"
  - "Optical Flow Sensor"
  - "RTK-GPS (ZED-F9P)"
vision:
  - "Intel RealSense D455 (Forward)"
  - "FLIR Lepton 3.5 Thermal Camera"
  - "OAK-D Stereo Camera (Rear)"
communication:
  - "5 GHz Wi-Fi (802.11ac)"
  - "4G LTE Module"
  - "ROS 2 DDS Middleware"
manipulators:
  - "6-DOF Robotic Arm (Dynamixel)"
  - "Parallel Gripper"
  - "Tool Attachment Point"
power:
  - "14.8V 10000mAh LiPo Battery (x2)"
  - "Custom Power Distribution Board"
  - "Hot-Swap Battery System"
software:
  - "Robot Operating System 2 (ROS 2 Humble)"
  - "Ubuntu 22.04 LTS"
  - "Python 3.10 / C++17"
  - "SLAM Toolbox / Nav2"
---
