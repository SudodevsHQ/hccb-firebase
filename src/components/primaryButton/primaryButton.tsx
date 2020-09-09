import React from 'react';
import { Icon } from '@iconify/react';
import bxRightArrowAlt from '@iconify/icons-bx/bx-right-arrow-alt';

import style from './primaryButton.module.scss';
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  path: string;
  attempted: boolean;
  children: React.ReactNode;
  error?: string;
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
          } else {
            toast.error(props.error);
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
      <ToastContainer
        position="bottom-right"
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
