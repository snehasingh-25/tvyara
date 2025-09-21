import React from 'react';
import Navbar from '../components/Nav-bar';
import BlurText from '../components/BlurText';
import MagnetLines from '../components/MagnetLines';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const TaskC = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <Navbar />

      <div className="m-10 flex flex-col items-center">
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl font-bold  mb-12 text-center"
        />

        <div className="b">
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="#5213ff"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskC;
