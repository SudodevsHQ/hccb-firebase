import React from 'react';
import { Link } from 'react-router-dom';

import style from './primaryButton.module.scss';

interface Props {
  path: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <Link to={props.path} className={`btn m-5 ${style.button}`}>
        {props.children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
