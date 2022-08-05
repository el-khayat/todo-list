export const toEditMode = todo =>({
    type:"TO_EDIT_MODE",
    payload: todo
})

export const toDoneMode = ()=>({
    type:"TO_DONE_MODE"
})

export const toNormalMode = ()=>({
    type:"TO_NORMAL_MODE"
})