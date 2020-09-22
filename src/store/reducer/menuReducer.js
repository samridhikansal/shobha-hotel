const initialState = {
  items: [
    {
      cat: 1,
      itemList: [
        { item: "item1", price: 2 },
        { item: "item2", price: 2 },
      ],
    },
    {
      cat: 2,
      itemList: [
        { item: "item1", price: 2 },
        { item: "item2", price: 2 },
      ],
    },
    {
      cat: 3,
      itemList: [
        { item: "item1", price: 2 },
        { item: "item2", price: 2 },
      ],
    },
  ],
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
