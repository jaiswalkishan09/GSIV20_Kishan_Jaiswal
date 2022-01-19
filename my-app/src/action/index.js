export const addList = (data) => {
  return {
    type: "ADD_LIST",
    data: data,
  };
};
export const pageInitial = (data) => {
  return {
    type: "PAGE_SET",
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

export const showNext = () => {
  return {
    type: "SHOW",
  };
};

export const notShowNext = () => {
  return {
    type: "NOT_SHOW",
  };
};

export const searchPageInitial = (data) => {
  return {
    type: "SEARCH_SET",
    data: data,
  };
};

export const searchPageIncrement = (data) => {
  return {
    type: "SEARCH_INCREMENT",
  };
};

export const searchPageDecrement = () => {
  return {
    type: "SEARCH_DECREMENT",
  };
};
