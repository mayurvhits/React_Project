// import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../config/particle-config';

const Particlebackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: 'red',
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: '9fafca',
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1,
          },
        },
      }}
    />
  );
};

export default Particlebackground;
