🚗 Self-Driving Car Project
Welcome to my self-driving car simulation project! 🎯 This project is all about building a car that can navigate through a virtual world on its own, using pathfinding algorithms to figure out the best routes.

What’s Happening Here? 🛣️
The car moves through a virtual environment defined by two input files:


test.world

These files contain nodes (think of them as checkpoints or intersections) that help the car map out its surroundings. Some of these nodes have special markers (yield.js), which increase the weight of those points. This makes the car behave more carefully in areas where it might need to slow down, like at intersections. ⚠️

How It Works ⚙️
The car uses pathfinding algorithms (like A* or Dijkstra’s) to plan its path from Point A to Point B. Each node has a default weight of 1, but if it’s marked with yield.js, it gets an extra weight of 2. This makes the algorithm think, “Hey, this area might be tricky—I should slow down here.”

Why I’m Doing This 🚀
This project is part of my exploration into autonomous driving. It’s a fun and challenging way to experiment with things like:

Traffic rules 🛑

Route optimization 📍

Obstacle avoidance 🚧

If you're into AI, self-driving tech, or just curious about how cars could drive themselves in the future, feel free to check it out! 😊

Let’s build the future together! 💡
