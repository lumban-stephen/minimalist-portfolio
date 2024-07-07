import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

const EducationCard = ({ position, content, mouse }) => {
  const mesh = useRef();
  const { size } = useThree();

  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, (mouse.current[1] * Math.PI) / 50, 0.1);
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, (mouse.current[0] * Math.PI) / 50, 0.1);
    }
  });

  return (
    <Box 
      ref={mesh} 
      position={position} 
      args={[4.5, 3, 0.1]} 
      scale={spring.scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? "#FFA500" : "#FFD700"} />
      <Text position={[0, 0.8, 0.06]} fontSize={0.3} color="#000" maxWidth={4} textAlign="center">
        {content.title}
      </Text>
      <Text position={[0, 0, 0.06]} fontSize={0.25} color="#000" maxWidth={4} textAlign="center">
        {content.institution}
      </Text>
      <Text position={[0, -0.8, 0.06]} fontSize={0.25} color="#000" maxWidth={4} textAlign="center">
        {content.date}
      </Text>
    </Box>
  );
};

const Education = ({ colorMode }) => {
  const mouse = useRef([0, 0]);
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of San Carlos - Cebu, Philippines",
      date: "2019-2022"
    },
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of Cebu - Cebu, Philippines",
      date: "Expected Graduation: June 2025"
    },
    {
      title: "Guidance and Counseling Peer Facilitator",
      institution: "University of Cebu",
      date: ""
    },
    {
      title: "Working Scholar",
      institution: "University of Cebu",
      date: ""
    }
  ];

  const handleMouseMove = (event) => {
    mouse.current = [
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    ];
  };

  return (
    <div 
      className={`min-h-screen w-screen ${colorMode} flex flex-col items-center justify-center section`}
      onMouseMove={handleMouseMove}
    >
      <h1 className="text-4xl font-bold mb-8">EDUCATION</h1>
      <h2 className="text-2xl italic mb-8">and other Experiences</h2>
      <div className="w-full h-[600px]">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              position={[(index % 2) * 6 - 3, -Math.floor(index / 2) * 4 + 2, 0]}
              content={edu}
              mouse={mouse}
            />
          ))}
        </Canvas>
      </div>
    </div>
  );
}

export default Education;