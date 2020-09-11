import React from 'react';
import { Icon } from '@iconify/react';
import bxRightArrowAlt from '@iconify/icons-bx/bx-right-arrow-alt';

import style from './primaryButton.module.scss';
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface Props {
  path: string;
  attempted: boolean;
  children: React.ReactNode;
  error?: string;
  validation?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ validation, ...props }: Props) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  return (
    <div className="d-flex justify-content-center">
      <button
        onClick={() => {
          if (
            props.attempted &&
            (validation === undefined || validation === true)
          ) {
            history.push(props.path);
          } else {
            toast.error(props.error);
          }
        }}
        className={`btn px-md-5 px-4 mt-md-4 mt-3 ${style.button}`}>
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
      <ToastContainer
        position={
          width !== undefined && width < 576 ? 'top-left' : 'bottom-right'
        }
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </div>
  );
};

export default PrimaryButton;
