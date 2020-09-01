import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxRightArrowAlt from '@iconify/icons-bx/bx-right-arrow-alt';

import style from './primaryButton.module.scss';

interface Props {
  path: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <Link to={props.path} className={`btn px-md-5 mt-4 ${style.button}`}>
        {props.children}
        <Icon
          icon={bxRightArrowAlt}
          style={{
            color: '#ffffff',
            fontSize: '1.75rem',
            marginTop: '-0.125em',
          }}
        />
      </Link>
    </div>
  );
};

export default PrimaryButton;
