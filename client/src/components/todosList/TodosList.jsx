import React, {useState} from 'react';
import s from './TodosList.module.scss';
import {TodoForm} from '../todoForm/TodoForm';
import {format} from 'date-fns';

const TodosList = ({todos}) => {
  const [boards, setBoards] = useState(todos);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const isBoardQueue = 'Queue';
  const isBoardDone = 'Done';

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };


  const dragOverHandler = (e) => {
    e.preventDefault();

    if (e.target.className === s.item) {
      e.target.style.boxShadow = '0 20px 3px gray';
    }
  };

  const dropCardHandler = (e, board) => {
    board.items.push(currentItem);

    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(boards.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }));
    e.target.style.boxShadow = 'none';
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const handlerChange = () => {

  };

  return (
    <div className={s.wrap}>
      {!!boards &&
        boards.map((board) =>
          <div key={board.id}
            className={s.border}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}>
            <div className={s.boarder__title}>{board.icon} {board.status}</div>
            {board.id === 1 && <TodoForm/>}
            {!!board.items.length ?
              board.items.map((item, index) =>
                <div key={item.id}
                  className={board.status === isBoardDone ? s.item__done : s.item}
                  onChange={handlerChange}
                  draggable={true}
                  onDragStart={(e) => dragStartHandler(e, board, item)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}>
                  {++index}. {item.title}
                  <p className={s.body}>{item.body}</p>
                  <p className={s.data}>{format(new Date(item.id), 'dd/MM/yyyy - h:m')}</p>
                  {board.status === isBoardQueue ? <div className={s.edit} onClick={()=> console.log('tsss')}>Редактировать</div> : null}
                </div>) :
              <div className={s.task__list__empty}>Список задач пуст</div>
            }
          </div>,
        )}
    </div>
  );
};

export {TodosList};
