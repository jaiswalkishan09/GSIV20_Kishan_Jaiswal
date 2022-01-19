const initialData = { data: false };

const movieCreditReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_MOVIE_CREDIT":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
export default movieCreditReducer;
