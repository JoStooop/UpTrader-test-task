import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {MyButtonGoBack} from '../../components/common/myButtonGoBack/MyButtonGoBack';
import {MyWrap} from '../../components/common/myWrap/MyWrap';
import {TodosList} from '../../components/todosList/TodosList';
import {getTodosProject} from '../../redux/selectors/projectsSelector';

const TodoPage = () => {
  const {todoId} = useParams();
  const navigate = useNavigate();

  const todosProject = useSelector(getTodosProject);

  const allTodosProject = todosProject.find((project) => project.id === Number(todoId))?.todos;

  const goBack = () => navigate(-1);

  return (
    <MyWrap>
      <MyButtonGoBack onClick={goBack}>GoBack</MyButtonGoBack>
      <TodosList todos={allTodosProject}/>
    </MyWrap>
  );
};

export {TodoPage};
