import React from 'react';
import './Layout.scss';
import ContentCard from '../ContentCard/ContentCard';

interface Props {
  image: 'graph' | 'quiz' | 'dashboard' | 'man';
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="layout p-5 mx-5">
      <div className="row h-100 align-items-center">
        <div className="col-md-4 gx-0">
          <img
            src={`/static/img/${props.image}.svg`}
            alt="A background"
            className="companion-image"
          />
        </div>
        <div className="col-md-8 h-100 gx-0">
          <ContentCard>{props.children}</ContentCard>
        </div>
      </div>
    </div>
  );
};

export default Layout;
