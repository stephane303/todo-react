import {
  ADD_TODO_PENDING,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO_PENDING,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS
} from "../actionTypes";

const initialState = {
  data: [],
  pending: false,
  addingTodo : false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        addingTodo:false
      };
    case ADD_TODO_PENDING:
      return {
        ...state,
        addingTodo: true
      }  

    case ADD_TODO_ERROR:
      return {
        ...state,
        addingTodo: false,
        error: action.payload
      }
    case FETCH_TODOS_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case FETCH_TODOS_ERROR: {
      console.log(action)
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    }
    case FETCH_TODOS_SUCCESS: {
      const todos = action.payload;
      return {
        ...state,
        data: todos,
        pending: false
      };
    }
    case DELETE_TODO_PENDING: {
      return {
        ...state,
        deletePending:true
      }
    }
    case DELETE_TODO_SUCCESS: {
      const id  = action.payload;
      return {
        ...state,
        data : state.data.filter( item => item.id !==id),
        deletePending: false
      }
    }
    case DELETE_TODO_ERROR: {
      return {
        ...state,
        deletePending: false,
        error:action.payload
      }
    }
    case TOGGLE_TODO: {
      const id = action.payload;      
      const newData =  state.data.map( 
        (item) => {
          if (item.id !== id){
            return item 
          } else {
            return {
              ...item,
              completed : !item.completed
            }
          }
        })

      return {
        ...state,
        data:newData
        }
      };
    
    default:
      return state;
  }
}
