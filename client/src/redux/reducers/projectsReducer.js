import {ADD_TITLE_PROJECT, ADD_TASK} from '../actions/projectAction';

const defaultState = [
  {
    id: 1, title: 'Project 1',
    todos: [
      {
        id: 1,
        status: 'Queue',
        icon: '⭕️',
        items: [],
      }, {
        id: 2,
        status: 'Development',
        icon: '📝',
        items: [
          {id: 14, title: 'Код ревью', body: 'Отсчитать сотрудников'},
          {id: 15, title: 'Задача на факториал', body: 'объяснить сотрудникам на код ревью'},
          {id: 16, title: 'Задача на фибоначи', body: 'Вникнуть в задачу и разобрать детальнее'},
        ],
      }, {
        id: 3,
        status: 'Done',
        icon: '✅',
        items: [
          {id: 17, title: 'Снять видео', body: 'Видео на темы: еда и здоровье'},
        ],

      }],
  },
]
;

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TITLE_PROJECT:
      return [...state, action.payload];
    case ADD_TASK:
      return state.filter((el) => {
        if (el.id === action.payload.idPage) {
          return [...state, el.todos[0].items.push(action.payload.data)];
        }
        return state;
      });
    default:
      return state;
  }
};
