---
title: "RoboCup Rescue 2024"
description: "Final round appearance in Eindhoven, Netherlands"
year: "2024"
location: "Eindhoven, Netherlands"
result: "Finalist"
image: "/images/posts/pic4.png"
color: "#FF8C00"
teamImage: "/images/posts/pic7.png"
highlights:
  - "Reached the final round"
  - "First international RoboCup appearance"
  - "Validated rescue rover capabilities on global stage"
vehicle:
  name: "ALTER Rover V1"
  image: "/images/posts/pic1.jpg"
  link: "/agv/v1/"
mechanical:
  title: "Mechanical Sub-System"
  text: "ALTER Rover V1 featured a modular chassis with mecanum wheels for omnidirectional movement, a 2-DOF robotic arm with servo gripper, and a compact profile designed for navigating through simulated rubble fields and confined passages."
electrical:
  title: "Electrical Sub-System"
  text: "The electrical architecture was built around a Raspberry Pi 4 and Arduino Mega combination, with custom motor driver boards, a power distribution system supporting dual LiPo batteries, and a comprehensive sensor integration bus."
software:
  title: "Software Sub-System"
  text: "Running ROS Noetic on Ubuntu 20.04, the software stack included SLAM-based navigation using RPLiDAR, depth perception through Intel RealSense D435i, and a custom operator interface for teleoperation with fail-safe emergency stop protocols."
focus:
  - title: "Hazardous Terrain Mobility"
    text: "Testing locomotion across rubble, inclines up to 45 degrees, and step obstacles using mecanum wheel traction."
  - title: "SLAM & Mapping"
    text: "Real-time 2D SLAM using RPLiDAR with loop closure for consistent map building in GPS-denied environments."
  - title: "Victim Detection"
    text: "Thermal camera integration for detecting heat signatures, combined with depth camera for spatial awareness."
  - title: "Operator Interface"
    text: "Custom web-based control panel with live video feeds, sensor overlays, and one-click emergency stop."
---
