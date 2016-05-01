/**
 * Wrapper for asynchronous actions.
 * You can know the status (not yet started, in process, done or failed) of the request of the given id.
 */
export default class Request {
  constructor(id, routine) {
    this.id = id;
    this.routine = routine;
  }

  get isRequest() {
    return true;
  }

  execute(store) {
    store.dispatch(this.startAction());
    return Promise.resolve(this.routine(store)).then((payload) => {
      return this.doneAction(payload);
    }).catch((error) => {
      return this.failedAction(error);
    });
  }

  startAction() {
    return {
      type: "REQUEST_START",
      id: this.id,
    };
  }

  doneAction(payload) {
    return {
      type: "REQUEST_DONE",
      id: this.id,
      payload,
    };
  }

  failedAction(error) {
    return {
      type: "REQUEST_FAILED",
      id: this.id,
      error,
    };
  }
}
