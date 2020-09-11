import React, { useEffect, useState } from 'react';
import SCQ from '../../../components/SCQ/SCQ';
import ReorderableList from '../../../components/ReorderableList/ReorderableList';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { arraysEqual } from '../../../util/arrayUtils';

const LapFive: React.FC = () => {
  const listOrder = useSelector<ReduxStore, number[]>(
    (state) => state.moduleOne.lapFive.order,
  );
  const [isValidOrder, setIsValidOrder] = useState(false);

  useEffect(() => {
    const isEqual = arraysEqual(listOrder, [1, 2, 3, 4, 5, 6, 7]);
    console.log(isEqual);
    setIsValidOrder(isEqual);
  }, [setIsValidOrder, listOrder]);

  return (
    <SCQ
      error={'Oops! Wrong order!'}
      title="Revisiting the fundamentals"
      description="Drag and drop the step into order"
      lapNumber={5}
      image="puzzle"
      nextPath="/module/1/lap/6"
      validation={isValidOrder}>
      <ReorderableList />
    </SCQ>
  );
};

export default LapFive;
