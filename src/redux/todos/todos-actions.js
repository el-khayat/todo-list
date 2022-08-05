export const addTodo = todo =>({
    type : "ADD_TODO",
    payload : todo
})
export const editTodo = todo =>({
    type : "EDIT",
    payload : todo
})

export const removeTodo = id =>({
    type : "REMOVE_TODO",
    payload : id
})

export const changeStatus = id =>({
    type : "CHANGE_STATUS",
    payload : id
})

