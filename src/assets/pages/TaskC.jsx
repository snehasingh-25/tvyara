import React from 'react'
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const TaskC = () => {
  return (
    <div>
      <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
    </div>
  )
}

export default TaskC
