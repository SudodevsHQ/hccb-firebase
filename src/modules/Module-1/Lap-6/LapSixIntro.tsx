import React from 'react';
import SCQ from '../../../components/SCQ/SCQ';

const LapSixIntro: React.FC = () => {
  return (
    <SCQ
      title="Negotiation"
      lapNumber={6}
      image="presentation"
      nextPath="/module/1/lap/6/partA">
      <h5 className="text-center p-md-5" style={{ lineHeight: 1.5 }}>
        Now, as you are done with the budgeting and manpower management. As a
        part of driving sales in your territory with a new product, it’s very
        important to ease your negotiation mind set and persuade the
        stakeholders around you for the best deal.
      </h5>
    </SCQ>
  );
};

export default LapSixIntro;
