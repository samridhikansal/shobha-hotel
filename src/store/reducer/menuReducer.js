const initialState = {
  items: [
    {
      category: "CHINESE",
      itemList: [
        { item: "Cream Tomato Soup ", price: 60 },
        { item: "Chilly Paneer", price: 130 },
      ],
    },
    {
      category: "PIZZA",
      itemList: [
        { item: "Cheese Pizza", price: 140 },
        { item: "Onion Capsicum Pizza", price: 170 },
      ],
    },
    {
      category: "TANDOOR",
      itemList: [
        { item: "Paneer Tikka", price: 170 },
        { item: "Plain Roti", price: 10 },
      ],
    },
  ],
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
