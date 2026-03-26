---
title: "Earthquake Response"
summary: "Collapsed-structure navigation, victim search, and real-time situational awareness in post-earthquake environments."
description: "Navigating rubble, confined spaces, and unstable terrain to locate survivors and relay critical data to first responders."
image: "/images/posts/pic1.jpg"
icon: "earthquake"
capabilities: ["Hazardous Terrain", "3D Mapping", "SLAM", "Perception", "Telemetry", "Victim Detection"]
objectives:
  - title: "Terrain Navigation"
    text: "Navigate through debris fields, uneven rubble, and confined passages that are inaccessible or too dangerous for human responders."
  - title: "Real-Time Mapping"
    text: "Build 3D maps of collapsed structures using LiDAR and depth cameras, providing responders with critical situational awareness."
  - title: "Victim Detection"
    text: "Utilize thermal imaging, audio sensors, and CO2 detection to locate survivors trapped under debris."
  - title: "Data Relay"
    text: "Stream live video, sensor data, and environmental readings to the command center for informed decision-making."
metrics:
  - label: "Terrain Types"
    value: "5+"
  - label: "Max Incline"
    value: "45°"
  - label: "Mapping Range"
    value: "50m"
  - label: "Data Latency"
    value: "<100ms"
---

## Mission Overview

Earthquake response is ALTER's primary mission focus. When structures collapse, sending human rescuers into unstable environments risks additional casualties. Our rovers are designed to enter these zones first — navigating through rubble, mapping the interior, and detecting signs of life.

The rover's modular design allows rapid reconfiguration for different scenarios: narrow passages require a compact profile, while open debris fields benefit from extended sensor arrays and flipper-assisted climbing.

## Validation Protocol

Each earthquake response scenario is tested against standardized rubble fields that simulate:

- **Pancake collapse** — floors stacked with minimal void space
- **Lean-to collapse** — angled surfaces creating triangular voids
- **V-shape collapse** — center depression with elevated edges
- **Confined tube passages** — narrow tunnels requiring precise maneuvering

Performance is measured across navigation success rate, mapping completeness, detection accuracy, and operator situational awareness scores.
