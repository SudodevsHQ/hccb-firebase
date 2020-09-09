import React from 'react';
import { Icon } from '@iconify/react';
import bxRightArrowAlt from '@iconify/icons-bx/bx-right-arrow-alt';

import style from './primaryButton.module.scss';
import { useHistory } from 'react-router-dom';

interface Props {
  path: string;
  attempted: boolean;
  children: React.ReactNode;
  validationFunction?: () => boolean;
}

const PrimaryButton: React.FC<Props> = ({
  validationFunction = () => false,
  ...props
}: Props) => {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center">
      <button
        onClick={() => {
          if (props.attempted || validationFunction()) {
            history.push(props.path);
          }
        }}
        className={`btn px-md-5 mt-4 ${style.button}`}>
        {props.children}
        <Icon
          icon={bxRightArrowAlt}
          style={{
            color: '#ffffff',
            fontSize: '1.75rem',
            marginTop: '-0.125em',
          }}
        />
      </button>
    </div>
  );
};

export default PrimaryButton;
