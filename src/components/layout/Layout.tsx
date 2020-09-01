import React from 'react';
import './Layout.scss';
import HeroCard from '../ContentCard/ContentCard';

interface Props {
  image: 'graph' | 'quiz' | 'dashboard';
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="layout p-5 mx-5">
      <div className="row h-100 align-items-center">
        <div className="col-md-3 gx-0">
          <img
            src={`/static/img/${props.image}.svg`}
            alt="A background"
            className="companion-image"
          />
        </div>
        <div className="col-md-9 gx-0 h-100 ">
          <HeroCard>{props.children}</HeroCard>
        </div>
      </div>
    </div>
  );
};

export default Layout;
