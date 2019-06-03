const intialState = {
  items: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_CHECK':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}