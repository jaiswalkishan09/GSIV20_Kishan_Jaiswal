const initialData = { data: false };

const addReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
export default addReducer;
