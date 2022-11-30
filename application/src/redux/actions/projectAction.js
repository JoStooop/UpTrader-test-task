import {actionCreator} from './actionsCreator';

export const ADD_TITLE_PROJECT = 'ADD_TITLE_PROJECT';
export const ADD_TASK = 'ADD_TASK';

export const setTitleProject = actionCreator(ADD_TITLE_PROJECT);
export const setTask = actionCreator(ADD_TASK);
