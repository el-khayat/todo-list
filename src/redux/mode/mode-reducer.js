const INITIAL_STATE = {
    mode : "normal"
}


const modeReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case "TO_EDIT_MODE":
            
            
            return {...state,mode : "edit"}
            
            
            case "TO_DONE_MODE":
                 
            return {...state,mode : "done"}
            
            
            case "TO_NORMAL_MODE":
            return {...state,mode : "normal"}
            
    
        default:
            return state
            
    }

}
export default modeReducer ;