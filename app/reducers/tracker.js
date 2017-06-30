export default function trackerReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
