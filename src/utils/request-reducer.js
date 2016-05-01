const assignRequestState = (state, action) => {
  switch (action.type) {
    case "REQUEST_START":
      return Object.assign({}, state, { [action.id]: "IN_PROCESS" });
    case "REQUEST_DONE":
      return Object.assign({}, state, { [action.id]: "DONE" });
    case "REQUEST_FAILED":
      return Object.assign({}, state, { [action.id]: "FAILED" });
    default:
      return state;
  }
}

const requestReducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_START":
    case "REQUEST_DONE":
    case "REQUEST_FAILED":
      return assignRequestState(state, action);
    default:
      return state;
  }
}
export default requestReducer;
