import React from 'react';
import ContentCard from '../ContentCard/ContentCard';

const Loading: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 text-center">
      <ContentCard>
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="spinner-border text-danger text-center mr-2"
            role="status"></span>
          <span className="text-secondary">
            Please wait checking user details...
          </span>
        </div>
      </ContentCard>
    </div>
  );
};

export default Loading;
