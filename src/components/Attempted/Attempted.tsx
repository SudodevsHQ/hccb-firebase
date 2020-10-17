import React from 'react';
import ContentCard from '../ContentCard/ContentCard';

const Attempted: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 text-center">
      <ContentCard>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-danger">You have already attempted this quiz!</p>
        </div>
      </ContentCard>
    </div>
  );
};

export default Attempted;
