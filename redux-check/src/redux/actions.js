export const ADD_TASK = 'ADD_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    description,
  },
});