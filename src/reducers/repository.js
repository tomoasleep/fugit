import { RECEIVE_REPOSITORY } from '../actions/repository';

const setRepository = (state, action) => {
  switch (action.type) {
    case RECEIVE_REPOSITORY:
      return Object.assign({}, state, {
        [action.uri]: action.repository,
      });
    default:
      return state;
  }
}
export default setRepository;
