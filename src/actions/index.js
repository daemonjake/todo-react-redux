const {v4: createUid} = require('uuid');

export const createTodo = msg => ({
    type: 'CREATE_TODO',
    uid: createUid(),
    msg
});

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});

export const toggleTodo = uid => ({
    type: 'TOGGLE_TODO',
    uid
});
