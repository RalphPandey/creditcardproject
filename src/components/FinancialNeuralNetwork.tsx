import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  isPulsing: boolean;
  pulseIntensity: number;
}

interface DataPacket {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  opacity: number;
}

interface Shape {
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  type: 'hexagon' | 'circle' | 'triangle';
  opacity: number;
}

export default function FinancialNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 120;
    const nodeCount = isMobile ? 20 : 60;
    const shapeCount = isMobile ? 5 : 15;

    let particles: Particle[] = [];
    let nodes: Node[] = [];
    let dataPackets: DataPacket[] = [];
    let shapes: Shape[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      nodes = [];
      dataPackets = [];
      shapes = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.2,
          color: Math.random() > 0.7 ? '#F7B32B' : '#FFFFFF',
        });
      }

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 4 + 3,
          pulsePhase: Math.random() * Math.PI * 2,
          isPulsing: false,
          pulseIntensity: 0,
        });
      }

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          size: Math.random() * 40 + 20,
          type: ['hexagon', 'circle', 'triangle'][Math.floor(Math.random() * 3)] as 'hexagon' | 'circle' | 'triangle',
          opacity: Math.random() * 0.15 + 0.05,
        });
      }
    };

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawTriangle = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawScanLines = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = '#0A0B0F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'screen';

      drawScanLines();

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = `rgba(247, 179, 43, ${shape.opacity})`;
        ctx.lineWidth = 2;

        if (shape.type === 'hexagon') {
          drawHexagon(0, 0, shape.size);
        } else if (shape.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        } else {
          drawTriangle(0, 0, shape.size);
        }
        ctx.stroke();
        ctx.restore();

        shape.rotation += shape.rotationSpeed;
        shape.x += Math.sin(Date.now() * 0.0001) * 0.1;
        shape.y += Math.cos(Date.now() * 0.0001) * 0.1;

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
      });

      particles.forEach(particle => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.2;
          particle.vy -= (dy / distance) * force * 0.2;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color === '#F7B32B'
          ? `rgba(247, 179, 43, ${particle.opacity})`
          : `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      nodes.forEach((node, i) => {
        node.pulsePhase += 0.02;
        const breathe = Math.sin(node.pulsePhase) * 0.05 + 1;

        if (Math.random() > 0.995 && !node.isPulsing) {
          node.isPulsing = true;
          node.pulseIntensity = 1;

          const nearbyNodes = nodes.filter((other, j) => {
            if (i === j) return false;
            const dx = other.x - node.x;
            const dy = other.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            return dist < 300;
          });

          if (nearbyNodes.length > 0) {
            const target = nearbyNodes[Math.floor(Math.random() * nearbyNodes.length)];
            dataPackets.push({
              x: node.x,
              y: node.y,
              targetX: target.x,
              targetY: target.y,
              progress: 0,
              opacity: 1,
            });
          }
        }

        if (node.isPulsing) {
          node.pulseIntensity *= 0.95;
          if (node.pulseIntensity < 0.01) {
            node.isPulsing = false;
            node.pulseIntensity = 0;
          }
        }

        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          node.vx -= (dx / distance) * force * 0.1;
          node.vy -= (dy / distance) * force * 0.1;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.vx *= 0.98;
        node.vy *= 0.98;

        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(247, 179, 43, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        const glowSize = node.radius * breathe * (1 + node.pulseIntensity * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize * 3);
        gradient.addColorStop(0, `rgba(247, 179, 43, ${0.8 + node.pulseIntensity * 0.2})`);
        gradient.addColorStop(0.5, `rgba(247, 179, 43, ${0.3 + node.pulseIntensity * 0.5})`);
        gradient.addColorStop(1, 'rgba(247, 179, 43, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = node.isPulsing
          ? `rgba(247, 179, 43, ${0.9 + node.pulseIntensity * 0.1})`
          : 'rgba(247, 179, 43, 0.6)';
        ctx.fill();
      });

      dataPackets = dataPackets.filter(packet => {
        packet.progress += 0.02;
        packet.opacity = 1 - packet.progress;

        if (packet.progress >= 1) return false;

        packet.x = packet.x + (packet.targetX - packet.x) * 0.02;
        packet.y = packet.y + (packet.targetY - packet.y) * 0.02;

        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 179, 43, ${packet.opacity})`;
        ctx.fill();

        const trail = ctx.createRadialGradient(packet.x, packet.y, 0, packet.x, packet.y, 10);
        trail.addColorStop(0, `rgba(247, 179, 43, ${packet.opacity * 0.5})`);
        trail.addColorStop(1, 'rgba(247, 179, 43, 0)');
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = trail;
        ctx.fill();

        return true;
      });

      ctx.globalCompositeOperation = 'source-over';

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#0A0B0F' }}
    />
  );
}
