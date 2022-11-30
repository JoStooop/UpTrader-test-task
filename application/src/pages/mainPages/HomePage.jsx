import React, {useState} from 'react';
import {MyWrap} from '../../components/common/myWrap/MyWrap';
import {ProjectsList} from '../../components/projectsList/ProjectsList';
import {MyButton} from '../../components/common/myButton/MyButton';
import {MyModal} from '../../components/common/myModal/MyModal';
import {ProjectForm} from '../../components/projectForm/ProjectForm';

const HomePage = () => {
  console.log('HomePage');

  const [modal, setModal] = useState(false);

  return (
    <MyWrap>
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <MyButton onClick={() => setModal(true)}>
          Создать проект
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <ProjectForm setModal={setModal}/>
        </MyModal>
      </div>
      <ProjectsList/>
    </MyWrap>
  );
};

export {HomePage};
