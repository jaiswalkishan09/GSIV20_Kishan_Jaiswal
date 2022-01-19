const initialData = { data: false };

const movieDetailReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_MOVIE_DATA":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
export default movieDetailReducer;
