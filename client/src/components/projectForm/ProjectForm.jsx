import React, {useState} from 'react';
import {MyInput} from '../common/myInput/MyInput';
import {MyButton} from '../common/myButton/MyButton';
import {useDispatch} from 'react-redux';
import {setTitleProject} from '../../redux/actions/projectAction';

const ProjectForm = ({setModal}) => {
  const dispatch = useDispatch();

  const [project, setProject] = useState({
    id: Date.now(),
    title: '',
    todos: [
      {id: 1, status: 'Queue', icon: '⭕️', items: []},
      {id: 2, status: 'Development', icon: '📝', items: []},
      {id: 3, status: 'Done', icon: '✅', items: []},
    ],
  });

  const handlerClick = (e) => {
    e.preventDefault();

    dispatch(setTitleProject(project));

    setProject({...project, title: ''});
    setModal(false);
  };

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setProject({...project, title: value});
  };

  return (
    <>
      <MyInput
        value={project.title}
        onChange={(e) => handleChangeTitle(e)}
        type="text"
        placeholder='Название проекта'/>
      <MyButton onClick={handlerClick}>Создать</MyButton>
    </>
  );
};

export {ProjectForm};
