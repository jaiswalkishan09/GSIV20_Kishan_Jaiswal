const initialData = "";

const inputReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return action.data;
    default:
      return state;
  }
};
export default inputReducer;
