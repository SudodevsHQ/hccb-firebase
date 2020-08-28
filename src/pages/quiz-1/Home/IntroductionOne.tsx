import React from 'react';

import style from './IntroductionOne.module.scss';
import Layout from '../../../components/layout/Layout';
import { Link } from 'react-router-dom';

const IntroductionOne: React.FunctionComponent = () => {
  return (
    <Layout image="quiz.svg">
      <div className={style.wrapper}>
        <h1 className={style.title}>Some Relevant Title</h1>
        <br></br>
        <p>
          You are the sales-head of Popz-Soda Pvt. Ltd. This case study is to
          analyse the decision-making capability of the sales-head and how well
          the scenario management is being done.
        </p>
        <p>
          At the end of each Lap, analysis will be provided for self-reflection
          and feedback. There is no specific sales strategy for resolving the
          laps, it’s the general acumen and you as a accountable position
          holding resolving the laps.
        </p>
        <p>
          Popz-Soda Pvt. Ltd. Has launched a new product “Aloe-Pop” the new
          immunity booster along with freshness of juice. This product has been
          priced at Rs 10 /- The launch is planned 10 days from now and the
          preparation of the resources have started. You as the sales head have
          the responsibility of co-ordinating with all the departments and
          planning for maximizing the sales in your territory of Barmadanagar.
        </p>
        <p>
          The sales target for first month is 5000 Cases, with one case having
          24 Aloe-pops. The promo discounting and commercial budget needs to be
          planned by you. <strong>So, get set ready to start the Lap 1</strong>
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/quiz/1/lap/1" className={`btn m-5 ${style.startLap1}`}>
            Start Lap 1 &#8594;
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IntroductionOne;
