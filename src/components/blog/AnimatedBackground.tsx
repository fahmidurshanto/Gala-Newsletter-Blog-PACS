import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingShape = ({ 
  shape, 
  size, 
  color, 
  initialPosition,
  animationDelay,
  animationDuration
}: {
  shape: 'circle' | 'square' | 'triangle';
  size: number;
  color: string;
  initialPosition: { x: number; y: number };
  animationDelay: number;
  animationDuration: number;
}) => {
  // Randomize the movement pattern
  const xOffset = (Math.random() - 0.5) * 200;
  const yOffset = (Math.random() - 0.5) * 200;
  
  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return (
          <motion.div
            className="rounded-full opacity-20"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              filter: 'blur(2px)',
            }}
            animate={{
              x: [0, xOffset, -xOffset, 0],
              y: [0, yOffset, -yOffset, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: animationDuration,
              delay: animationDelay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      case 'square':
        return (
          <motion.div
            className="opacity-20"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: '10%',
              filter: 'blur(2px)',
            }}
            animate={{
              x: [0, xOffset, -xOffset, 0],
              y: [0, yOffset, -yOffset, 0],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: animationDuration,
              delay: animationDelay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            className="opacity-20"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              filter: 'blur(2px)',
            }}
            animate={{
              x: [0, xOffset, -xOffset, 0],
              y: [0, yOffset, -yOffset, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: animationDuration,
              delay: animationDelay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="absolute"
      style={{
        left: `${initialPosition.x}%`,
        top: `${initialPosition.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {renderShape()}
    </div>
  );
};

const FloatingParticle = ({ 
  size, 
  color, 
  initialPosition,
  animationDelay,
  animationDuration
}: {
  size: number;
  color: string;
  initialPosition: { x: number; y: number };
  animationDelay: number;
  animationDuration: number;
}) => {
  // Randomize the movement pattern
  const xOffset = (Math.random() - 0.5) * 100;
  const yOffset = (Math.random() - 0.5) * 100;
  
  return (
    <motion.div
      className="absolute rounded-full opacity-10"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${initialPosition.x}%`,
        top: `${initialPosition.y}%`,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(1px)',
      }}
      animate={{
        x: [0, xOffset, -xOffset, 0],
        y: [0, yOffset, -yOffset, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: animationDuration,
        delay: animationDelay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

const AnimatedBackground = () => {
  // Generate random shapes
  const [shapes, setShapes] = useState<Array<{
    id: number;
    shape: 'circle' | 'square' | 'triangle';
    size: number;
    color: string;
    position: { x: number; y: number };
    delay: number;
    duration: number;
  }>>([]);
  
  // Generate random particles
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    color: string;
    position: { x: number; y: number };
    delay: number;
    duration: number;
  }>>([]);
  
  useEffect(() => {
    // Generate 12 random shapes with brand colors (darker variants)
    const generatedShapes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
      size: Math.random() * 80 + 30, // Random size between 30-110px
      color: [
        '#0a4a7a',   // Darker blue (#1C75BC -> #0a4a7a)
        '#a53a1d',   // Darker orange (#D7562B -> #a53a1d)
        '#d69a1a',   // Darker yellow (#F4BB3A -> #d69a1a)
        '#000000'    // Pure black (#061839 -> #000000)
      ][Math.floor(Math.random() * 4)], // Use darker brand colors
      position: {
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
      },
      delay: Math.random() * 8, // Random delay (0-8s)
      duration: Math.random() * 15 + 15, // Random duration (15-30s)
    }));
    
    // Generate 30 random particles (darker variants)
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1000, // Different ID range to avoid conflicts
      size: Math.random() * 8 + 2, // Random size between 2-10px
      color: [
        '#0a4a7a',   // Darker blue (#1C75BC -> #0a4a7a)
        '#a53a1d',   // Darker orange (#D7562B -> #a53a1d)
        '#d69a1a',   // Darker yellow (#F4BB3A -> #d69a1a)
        '#000000'    // Pure black (#061839 -> #000000)
      ][Math.floor(Math.random() * 4)], // Use darker brand colors
      position: {
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
      },
      delay: Math.random() * 5, // Random delay (0-5s)
      duration: Math.random() * 10 + 10, // Random duration (10-20s)
    }));
    
    setShapes(generatedShapes);
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Enhanced gradient overlay with darker colors */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, 
            rgba(10, 74, 122, 0.1) 0%, 
            rgba(165, 58, 29, 0.1) 25%, 
            rgba(214, 154, 26, 0.1) 50%, 
            rgba(0, 0, 0, 0.1) 75%, 
            rgba(10, 74, 122, 0.1) 100%)`,
        }}
      />
      
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          shape={shape.shape}
          size={shape.size}
          color={shape.color}
          initialPosition={shape.position}
          animationDelay={shape.delay}
          animationDuration={shape.duration}
        />
      ))}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          size={particle.size}
          color={particle.color}
          initialPosition={particle.position}
          animationDelay={particle.delay}
          animationDuration={particle.duration}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;