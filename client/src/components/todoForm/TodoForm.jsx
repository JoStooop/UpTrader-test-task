import React, {useState} from 'react';
import {MyInput} from '../common/myInput/MyInput';
import {MyButton} from '../common/myButton/MyButton';
import {useDispatch} from 'react-redux';
import {setTask} from '../../redux/actions/projectAction';
import {useParams} from 'react-router-dom';

const TodoForm = () => {
  const {todoId} = useParams();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setTodo({...todo, title: value});
  };

  const handleChangeBody = (e) => {
    const value = e.target.value;
    setTodo({...todo, body: value});
  };

  const handleClick = (e) => {
    const isTitleAndBodyEmpty = !todo.title && !todo.body || !todo.title || !todo.body;
    if (isTitleAndBodyEmpty) return;

    const dataProject = {
      idPage: Number(todoId),
      data: todo,
    };

    dispatch(setTask(dataProject));
    setTodo({id: Date.now(), title: '', body: ''});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTitleAndBodyEmpty = !todo.title && !todo.body || !todo.title || !todo.body;
    if (isTitleAndBodyEmpty) return;
  };

  return (
    <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
      <MyInput value={todo.title}
        onChange={handleChangeTitle}
        type="text"
        placeholder='Название задачи'/>
      <MyInput value={todo.body}
        onChange={handleChangeBody}
        type="text"
        placeholder='Описание задачи'/>
      <MyButton onClick={handleClick}>
        Создать задачу
      </MyButton>
    </form>
  );
};

export {TodoForm};
