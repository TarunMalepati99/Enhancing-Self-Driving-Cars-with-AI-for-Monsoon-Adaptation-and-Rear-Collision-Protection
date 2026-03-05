
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1e9be36d-cbed-4b18-9c64-865603578d64" />
<img width="1920" height="1080" alt="Screenshot 2026-03-04 151452" src="https://github.com/user-attachments/assets/d5006e02-7486-4521-b0db-caafe0289548" />
[README.md](https://github.com/user-attachments/files/25750449/README.md)
# 🚗 Self-Driving Car Simulation

> A virtual self-driving car that navigates through simulated environments using intelligent pathfinding algorithms.

---

## Table of Contents

1. [About The Project](#about-the-project)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Usage](#usage)
4. [Roadmap](#roadmap)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)
8. [Acknowledgments](#acknowledgments)

---

## About The Project

Welcome to my self-driving car simulation project! 🎯 This project is all about building a car that can navigate through a virtual world on its own, using pathfinding algorithms to figure out the best routes.

**What's Happening Here? 🛣️**

The car moves through a virtual environment defined by two input files:

- `test.world`

These files contain **nodes** (think of them as checkpoints or intersections) that help the car map out its surroundings. Some of these nodes have special markers (`yield.js`), which increase the weight of those points. This makes the car behave more carefully in areas where it might need to slow down — like at intersections. ⚠️

**How It Works ⚙️**

The car uses pathfinding algorithms (like **A\*** or **Dijkstra's**) to plan its path from Point A to Point B. Each node has a default weight of `1`, but if it's marked with `yield.js`, it gets an extra weight of `2`. This makes the algorithm think: *"Hey, this area might be tricky — I should slow down here."*

**Why I'm Doing This 🚀**

This project is part of my exploration into autonomous driving. It's a fun and challenging way to experiment with things like:

- Traffic rules 🛑
- Route optimization 📍
- Obstacle avoidance 🚧

If you're into AI, self-driving tech, or just curious about how cars could drive themselves in the future, feel free to check it out! 😊

[🔝 back to top](#table-of-contents)

---

## Built With

This project is powered by the following technologies:

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[🔝 back to top](#table-of-contents)

---

## Getting Started

Here's how to get a local copy of the simulation up and running.

### Prerequisites

Make sure you have Node.js and npm installed:

```bash
npm install npm@latest -g
```

### Installation

1. Clone the repo

```bash
git clone https://github.com/your_username/self-driving-car.git
```

2. Navigate to the project directory

```bash
cd self-driving-car
```

3. Install NPM packages

```bash
npm install
```
 
4. Add your world configuration file (e.g., `test.world`) to the project root.

[🔝 back to top](#table-of-contents)

---

## Usage

Run the simulation by executing:

```bash
node index.js
```

The car will read the `.world` input file, parse all nodes, apply yield weights where `yield.js` markers are present, and compute the optimal path using the selected algorithm.



For more examples, please refer to the [Documentation](#)

[🔝 back to top](#table-of-contents)

---

## Roadmap

- [x] Basic node graph parsing from `.world` files
- [x] Dijkstra's algorithm implementation
- [x] Yield node weight system (`yield.js`)
- [x] A\* algorithm support
- [x] Visual simulation renderer
- [x] Obstacle avoidance module 🚧
- [x] Multi-vehicle simulation
- [x] Traffic light rule integration 🛑


See the [open issues](https://github.com/your_username/self-driving-car/issues) for a full list of proposed features and known issues.

[🔝 back to top](#table-of-contents)

---

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also open an issue with the tag `enhancement`. Don't forget to ⭐ the project — thanks!

1. Fork the Project
2. Create your Feature Branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

[🔝 back to top](#table-of-contents)

---

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[🔝 back to top](#table-of-contents)

---

## Contact

Your Name — [@your_twitter](https://twitter.com/your_twitter) — email@example.com

Project Link: [https://github.com/your_username/self-driving-car](https://github.com/your_username/self-driving-car)

[🔝 back to top](#table-of-contents)

---

## Acknowledgments

Resources and inspirations that helped build this project:

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet)
- [A* Pathfinding Explained](https://www.redblobgames.com/pathfinding/a-star/introduction.html)
- [Dijkstra's Algorithm — Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Node.js Docs](https://nodejs.org/en/docs)

[🔝 back to top](#table-of-contents)

---

> *Let's build the future together! 💡*
