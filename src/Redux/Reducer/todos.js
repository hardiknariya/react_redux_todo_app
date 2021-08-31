const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, 
        data :[...state.data ,
        {
          message :action.payload
        }
        ]
      };

    default:
      return state; 
  }
}; 

export default todos;
