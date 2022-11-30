import React from 'react';
import s from './ProjectsList.module.scss';
import {Link} from 'react-router-dom';
import {ProjectItem} from '../projectItem/ProjectItem';
import {getNamesProjects} from '../../redux/selectors/projectsSelector';
import {useSelector} from 'react-redux';

const ProjectsList = () => {
  const projectNames = useSelector(getNamesProjects);

  return (
    <div className={s.wrap}>
      {projectNames.map((project) =>
        <Link key={project.id} to={`/${project.id}`} >
          <ProjectItem>
            {project.title}
          </ProjectItem>
        </Link>,
      )}
    </div>
  );
};

export {ProjectsList};
