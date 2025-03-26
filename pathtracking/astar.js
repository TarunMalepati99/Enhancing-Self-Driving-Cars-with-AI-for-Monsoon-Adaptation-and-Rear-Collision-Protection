const fs = require('fs');
const path = require('path');

// Function to parse the world file (new2.world or test.world) and extract nodes, weights, and markers
function parseWorldFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8').split('\n');
    const nodes = new Map();
    let start = null, end = null;

    data.forEach(line => {
        const [type, node, ...rest] = line.split(' ');

        if (type === 'node') {
            nodes.set(node, { id: node, neighbors: new Map(), yield: false });
        } else if (type === 'edge') {
            const [neighbor, weight] = rest;
            const hasYield = weight.includes("yield.js");
            const baseWeight = parseFloat(weight) || 1;
            const finalWeight = baseWeight + (hasYield ? 2 : 0);
            
            if (nodes.has(node)) nodes.get(node).neighbors.set(neighbor, finalWeight);
            else nodes.set(node, { id: node, neighbors: new Map([[neighbor, finalWeight]]) });
        } else if (type === 'start') {
            start = node;
        } else if (type === 'end') {
            end = node;
        }
    });

    return { nodes, start, end };
}



// Heuristic function for A* Path Tracking 1
function heuristic(node, end) {
    return nodeValues[node] || Infinity;
}

// Helper to find the node in the openSet with the lowest fScore
function getLowestFScoreNode(openSet, fScore) {
    return openSet.reduce((lowest, node) => fScore.get(node) < fScore.get(lowest) ? node : lowest);
}

// A* algorithm implementation for Path Tracking 1
function aStar(nodes, start, end) {
    const openSet = [start];
    const cameFrom = new Map();
    const gScore = new Map();
    const fScore = new Map();

    nodes.forEach((_, node) => {
        gScore.set(node, Infinity);
        fScore.set(node, Infinity);
    });

    gScore.set(start, 0);
    fScore.set(start, heuristic(start, end));

    while (openSet.length > 0) {
        const current = getLowestFScoreNode(openSet, fScore);

        if (current === end) return reconstructPath(cameFrom, current);

        openSet.splice(openSet.indexOf(current), 1);

        nodes.get(current).neighbors.forEach((weight, neighbor) => {
            const tentativeGScore = gScore.get(current) + weight;

            if (tentativeGScore < gScore.get(neighbor)) {
                cameFrom.set(neighbor, current);
                gScore.set(neighbor, tentativeGScore);
                fScore.set(neighbor, tentativeGScore + heuristic(neighbor, end));

                if (!openSet.includes(neighbor)) openSet.push(neighbor);
            }
        });
    }

    return [];  // Return an empty path if no path is found
}

// Reconstructs the path from start to end based on cameFrom map
function reconstructPath(cameFrom, current) {
    const totalPath = [current];
    while (cameFrom.has(current)) {
        current = cameFrom.get(current);
        totalPath.unshift(current);
    }
    return totalPath;
}

// Main function to execute the A* algorithm for Path Tracking 1
function main() {
    const filePath = path.join(__dirname, 'new2.world');
    const { nodes, start, end } = parseWorldFile(filePath);

    if (!start || !end) {
        console.error('Start or end node missing!');
        return;
    }

    const path = aStar(nodes, start, end);

    if (path.length === 0) {
        console.log('No path found between start and end.');
    } else {
        console.log('Path tracking 1 - Shortest path:', path);
    }
}

main();
