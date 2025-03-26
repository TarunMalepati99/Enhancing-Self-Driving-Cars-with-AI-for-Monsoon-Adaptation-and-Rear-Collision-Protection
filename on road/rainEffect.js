window.onload = function() {
    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');
    const raindrops = [];
    const rainCount = 200; // Number of raindrops

    // Adjust canvas size to the full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Raindrop properties
    class Raindrop {
        constructor() {
            this.x = Math.random() * canvas.width; // X position
            this.y = Math.random() * canvas.height; // Y position
            this.length = Math.random() * 20 + 10; // Length of the drop
            this.velocity = Math.random() * 5 + 2; // Fall speed
            this.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        }

        // Update the position of each raindrop
        update() {
            this.y += this.velocity;
            if (this.y > canvas.height) {
                this.y = 0 - this.length;
                this.x = Math.random() * canvas.width;
            }
        }

        // Draw the raindrop
        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`; // Blue-gray color
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    // Initialize raindrops
    function initRain() {
        for (let i = 0; i < rainCount; i++) {
            raindrops.push(new Raindrop());
        }
    }

    // Animate the rain effect
    function animateRain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

        // Draw each raindrop
        for (let i = 0; i < raindrops.length; i++) {
            raindrops[i].update();
            raindrops[i].draw();
        }

        requestAnimationFrame(animateRain); // Recursive animation
    }

    // Initialize and start the rain animation
    initRain();
    animateRain();

    // Adjust the canvas size if the window is resized
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};
