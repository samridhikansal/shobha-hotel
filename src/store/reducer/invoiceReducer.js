const inititalState = { item: [] };

const invoiceReducer = (state = inititalState, action) => {
  if (action.type === "ADD_ITEM_TO_BILL") {
    return { ...state, item: state.item.concat(action.payload) };
  }
  return state;
};

export default invoiceReducer;
