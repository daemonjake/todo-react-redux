const todos = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            const {uid, msg} = action;

            return [
                ...state,
                {
                    uid,
                    msg,
                    visible: true
                }
            ];

        case 'TOGGLE_TODO':
            const {uid: targetUid} = action;

            return state.map(todo => {
                if (todo.uid === targetUid) todo.visible = !todo.visible;

                return todo;
            });

        default:
            return state;
    }
};

export default todos;
