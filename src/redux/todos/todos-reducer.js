const INITIAL_STATE = {
  todoInEteting :{
    id:0,
    title:"",
    done:false
  },
  todos :[
    {
      id:1,
      title : "todo talata  1 from store " ,
      done : false 
    },
    {
      id:2,
      title : "todo 2" ,
      done : true 
    },
    {
      id:3,
      title : "todo 3 from store " ,
      done : false 
    },
    {
      id:4,
      title : "todo 4 sdc ascw awcqw qwcq" ,
      done : true 
    }
  ] };

  const todosReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case "ADD_TODO":
            return{...state,todos: [...state.todos,action.payload]}
           
        case "REMOVE_TODO":
            // return []
            
            return {...state,todos: state.todos.filter(todo => todo.id !== action.payload)}
         
        case "TO_EDIT_MODE":
            // return []
            
            return {...state,todoInEteting:  action.payload}
            
        case "EDIT":
      
            return {...state,
              todoInEteting:{   id:0,
                title:"",
                done:false},
              todos: state.todos.map(todo =>{
              if(todo.id !== action.payload.id)
              return todo 
              todo.title = action.payload.title ;
              return todo
            }) }
            
        case "CHANGE_STATUS":
           
            return {...state,todos : state.todos.map(todo => {
              if ( todo.id !== action.payload  ) {
                return todo
              } else {
                todo.done = !todo.done
                return todo
              }
            })}
            
    
        default:
          return state ;
            
    }
  }
  export default todosReducer ;