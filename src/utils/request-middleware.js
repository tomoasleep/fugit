import { isRequestNeeded } from './request-functions';

const requestMiddleware = store => next => action => {
  if (action.isRequest) {
    if (isRequestNeeded(store.getState(), action.id)) {
      return Promise.resolve(
        action.execute(store).then((nextAction) => store.dispatch(nextAction))
      );
    } else {
      return Promise.resolve();
    }
  } else {
    return next(action);
  }
}
export default requestMiddleware;
