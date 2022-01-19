const initialData = true;

const showReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SHOW":
      return true;
    case "NOT_SHOW":
      return false;
    default:
      return state;
  }
};
export default showReducer;
