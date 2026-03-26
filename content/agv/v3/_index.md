---
title: "ALTER Rover V3"
description: "AI-powered search and rescue"
version: "V3"
image: "/images/posts/pic5.png"
color: "#FF8C00"
dimensions:
  length: "0.90 m"
  breadth: "0.65 m"
  height: "0.42 m"
mass: "42 kg"
top_speed: "2.0 m/s"
dof: "6 (Surge, Sway, Heave, Roll, Pitch, Yaw)"
compute:
  - "Intel Core i7-1265U"
  - "NVIDIA Jetson AGX Orin 32GB"
  - "ESP32-S3 Microcontroller Array"
sensors:
  - "Ouster OS1-32 3D LiDAR"
  - "Intel RealSense L515 LiDAR Camera"
  - "VectorNav VN-100 IMU"
  - "CO2 / Gas Detection Sensors"
propulsion:
  - "Brushless Hub Motors (x6)"
  - "Custom FOC Controllers"
  - "Articulated Track + Flipper System"
navigation:
  - "Ouster OS1-32 for HD SLAM"
  - "VectorNav VN-100 AHRS"
  - "Visual-Inertial Odometry (VIO)"
  - "Multi-Constellation RTK-GNSS"
vision:
  - "ZED 2i Stereo Camera (Forward)"
  - "FLIR Boson 640 Thermal (Forward)"
  - "Intel RealSense L515 (Downward)"
  - "360° Panoramic Camera"
communication:
  - "Wi-Fi 6 (802.11ax) Mesh"
  - "5G NR Module"
  - "Custom ROS 2 DDS over 5G"
manipulators:
  - "7-DOF Robotic Arm (Custom)"
  - "Dexterous End-Effector"
  - "Victim Detection Probe"
power:
  - "22.2V 16000mAh LiPo Battery (x2)"
  - "Intelligent Power Management Unit"
  - "Quick-Swap Battery Cassette"
software:
  - "Robot Operating System 2 (ROS 2 Iron)"
  - "Ubuntu 22.04 LTS"
  - "PyTorch / TensorRT"
  - "Custom SLAM + Nav2 Stack"
---
