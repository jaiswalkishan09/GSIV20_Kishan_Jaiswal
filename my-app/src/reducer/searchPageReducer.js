const initialData = 0;

const searchPageReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SEARCH_SET":
      return action.data;
    case "SEARCH_INCREMENT":
      return state + 1;
    case "SEARCH_DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default searchPageReducer;
