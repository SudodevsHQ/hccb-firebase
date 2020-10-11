import React from 'react';
import ContentCard from '../ContentCard/ContentCard';

const ServerError: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 text-center">
      <ContentCard>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-danger">
            Failed to verify link. <br /> Please check your email for quiz
            invite link.
          </p>
        </div>
      </ContentCard>
    </div>
  );
};

export default ServerError;
