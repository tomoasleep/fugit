import { RECEIVE_LOG } from '../actions/log';

const setLog = (state, action) => {
  switch (action.type) {
    case RECEIVE_LOG:
      return Object.assign({}, state, {
        [action.uri]: action.log,
      });
    default:
      return state;
  }
}
export default setLog;
