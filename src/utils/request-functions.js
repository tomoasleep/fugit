export const isRequestNeeded = (state, id) => {
  if (state.requests) {
    switch (state.requests[id]) {
      case "IN_PROCESS":
      case "DONE":
        return false;
      case "FAILED":
        return true;
      default:
        return true;
    }
  } else {
    return true;
  }
}

export const isRequestFinished = (state, id) => {
  if (state.requests) {
    switch (state.requests[id]) {
      case "FAILED":
      case "DONE":
        return true;
      default:
        return false;
    }
  } else {
    return false;
  }
}

