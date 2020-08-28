import React from 'react';

import style from './HeroCard.module.scss';

interface Props {
  children: React.ReactNode;
}

const HeroCard: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div
      className={`${style.card} p-5 d-flex flex-column justify-content-center`}>
      {props.children}
    </div>
  );
};

export default HeroCard;
