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
