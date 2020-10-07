import React, { useState, useEffect } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import styles from './ReorderableList.module.scss';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-bx/bx-up-arrow';
import arrowUp from '@iconify/icons-bx/bx-down-arrow';
import { moduleOneResultData } from '../../modules/Module-1/utils/data';
import { shuffleArray } from '../../util/arrayUtils';
import { useDispatch } from 'react-redux';
import { setLapFiveOrder } from '../../redux/actions/moduleOneActions';

const reorder = (
  list: Array<{ id: number; content: string }>,
  startIndex: number,
  endIndex: number,
): Array<{ id: number; content: string }> => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const ReorderableList: React.FC = () => {
  const executionStepList = moduleOneResultData.lapFive;
  const [steps, setSteps] = useState(executionStepList);
  const dispatch = useDispatch();

  useEffect(() => {
    shuffleArray(steps);
  }, [steps]);

  useEffect(() => {
    // Set order on mount after shuffle
    dispatch(setLapFiveOrder(steps.map((item) => item.id)));
  }, [dispatch, steps]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(steps, result.source.index, result.destination.index);
    setSteps(items);
    const postDropIndexes = steps.map((item) => item.id);
    dispatch(setLapFiveOrder(postDropIndexes));
  };

  return (
    <div className={`${styles.droppableWrapper} row px-0`}>
      <div className="indexes col-lg-1 col-1 gx-1 gx-lg-2 d-flex flex-column justify-content-around">
        <div className={`${styles.index}`}>1</div>
        <div className={`${styles.index}`}>2</div>
        <div className={`${styles.index}`}>3</div>
        <div className={`${styles.index}`}>4</div>
        <div className={`${styles.index}`}>5</div>
        <div className={`${styles.index}`}>6</div>
        <div className={`${styles.index}`}>7</div>
      </div>
      <div className="col-lg-8 col-11 gx-0 gx-md-1 px-1 px-md-3">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="reorderableList">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {executionStepList.map((item, index) => (
                  <Draggable
                    key={`item-${item.id}`}
                    draggableId={`item-${item.id}`}
                    index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`${styles.item} ${
                          snapshot.isDragging ? styles.dragging : ''
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div
        className={`col-lg-3 col text-center d-none d-md-block ${styles.dndInfo} my-auto`}>
        Drag and drop the steps into correct order
        <Icon
          icon={arrowUp}
          style={{ color: '#7C57F6', fontSize: '32px' }}
        />{' '}
        or
        <Icon icon={arrowDown} style={{ color: '#7C57F6', fontSize: '32px' }} />
        into their order of execution
      </div>
    </div>
  );
};

export default ReorderableList;
