import requestReducer from '../utils/request-reducer'
import repository from './repository'
import log from './log'

const initialState = {}
const reducer = (state = initialState, action) => {
  return {
    repositories: repository(state.repositories, action),
    logs: log(state.logs, action),
    requests: requestReducer(state.requests, action),
  }
}
export default reducer
