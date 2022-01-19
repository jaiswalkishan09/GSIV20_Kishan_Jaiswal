export const addList = (data) => {
  return {
    type: "ADD_LIST",
    data: data,
  };
};

export const pageIncrement = () => {
  return {
    type: "INCREMENT",
  };
};

export const pageDecrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const movieId = (id) => {
  return {
    type: "ID",
    id: id,
  };
};

export const addDetailMovie = (data) => {
  return {
    type: "ADD_MOVIE_DATA",
    data: data,
  };
};

export const addMovieCredit = (data) => {
  return {
    type: "ADD_MOVIE_CREDIT",
    data: data,
  };
};
