const intialState = {
  items: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(o => o.id != action.payload)
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
}