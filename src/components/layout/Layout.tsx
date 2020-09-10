import React from 'react';
import './Layout.scss';
import ContentCard from '../ContentCard/ContentCard';

interface Props {
  image:
    | 'graph'
    | 'quiz'
    | 'dashboard'
    | 'man'
    | 'analysis'
    | 'puzzle'
    | 'presentation';
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="layout px-sm-2 pt-sm-5 p-xxl-5 p-4 mx-1 mx-sm-5 mt-lg-3">
      <div className="row h-100 align-items-center">
        <div className="col-xxl-4 col-lg-2 gx-0 d-none d-xl-block">
          <img
            src={`/static/img/${props.image}.svg`}
            alt="A background"
            className="companion-image"
          />
        </div>
        <div className="col-xxl-8 col-lg-10 h-100 gx-0 flex-grow-1 overflow-hidden">
          <ContentCard>{props.children}</ContentCard>
        </div>
      </div>
    </div>
  );
};

export default Layout;
