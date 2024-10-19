import React, { useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      dx: number;
      dy: number;
    }[] = [];
    const numParticles = 100;
    const maxDistance = 150; // Maximum distance for drawing edges between neurons

    const createParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        particles.push({ x, y, size, dx, dy });
      }
    };

    const drawConnections = () => {
      particles.forEach((particle, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i];
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );

          // Draw an edge if within maxDistance
          if (distance < maxDistance) {
            context.beginPath();
            context.strokeStyle = `rgba(255, 255, 255, ${
              1 - distance / maxDistance
            })`;
            context.lineWidth = 0.5;
            context.moveTo(particle.x, particle.y);
            context.lineTo(otherParticle.x, otherParticle.y);
            context.stroke();
          }
        }
      });
    };

    const animate = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        context.fillStyle = "rgba(255, 255, 255, 0.8)";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        // Move particle
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      drawConnections(); // Draw edges connecting particles
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas"></canvas>;
};

export default BackgroundAnimation;
