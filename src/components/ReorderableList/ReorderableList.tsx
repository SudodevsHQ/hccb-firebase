import React, { useState } from 'react';
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

const executionStepList = [
  { id: 1, content: 'Planning & Preparation' },
  { id: 2, content: 'Approach – Opening the call' },
  { id: 3, content: 'Sell and Secure' },
  { id: 4, content: 'Increase (NPD & Range Selling)' },
  { id: 5, content: 'Stock Check and Store Check' },
  { id: 6, content: 'Approach – Opening the call' },
  { id: 7, content: 'Outlet Merchandising' },
];

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
  const [steps, setSteps] = useState(executionStepList);
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(steps, result.source.index, result.destination.index);
    setSteps(items);
    const postDropIndexes = steps.map((item) => item.id);
    console.log(postDropIndexes);
  };

  return (
    <div className="droppableWrapper row">
      <div className="indexes col-1 d-flex flex-column justify-content-around">
        <div className={`${styles.index}`}>1</div>
        <div className={`${styles.index}`}>2</div>
        <div className={`${styles.index}`}>3</div>
        <div className={`${styles.index}`}>4</div>
        <div className={`${styles.index}`}>5</div>
        <div className={`${styles.index}`}>6</div>
        <div className={`${styles.index}`}>7</div>
      </div>
      <div className="col-9">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="reorderableList">
            {(provided) => (
              <div
                className={`${styles.reorderableList}`}
                {...provided.droppableProps}
                ref={provided.innerRef}>
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
      <div className={`col-2 ${styles.dndInfo}`}>
        Drag and reorder the steps
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
