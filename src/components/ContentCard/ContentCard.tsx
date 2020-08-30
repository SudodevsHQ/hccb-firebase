import React from 'react';

import style from './ContentCard.module.scss';

interface Props {
  children: React.ReactNode;
}

const ContentCard: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div
      className={`${style.card} p-5 d-flex flex-column justify-content-center`}>
      {props.children}
    </div>
  );
};

export default ContentCard;
