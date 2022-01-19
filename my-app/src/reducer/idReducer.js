const initialData = -1;

const idReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ID":
      return {
        id: action.id,
      };
    default:
      return state;
  }
};
export default idReducer;
