import React from 'react';
import Conclusion from '../../../components/Conclusion/Conclusion';

const ModuleOneConclusion: React.FC = () => {
  return (
    <Conclusion
      title="Good Job!"
      description="Well Done we are done with the module 1, you have well managed the finances and team selection.
       All the best for the execution with all the inputs received in the Laps 🙂 "
      nextPath="/module/1/conclusion/result"
      downloadUrl="/module/1/conclusion/result"
    />
  );
};

export default ModuleOneConclusion;
