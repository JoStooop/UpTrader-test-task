import {ADD_PROJECT} from '../actions/projectAction';

const defaultState = {
  projects: [
    {id: 1, title: 'Project 1', todos: []},
    {id: 2, title: 'Project 2', todos: []},
  ],
};

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
};
