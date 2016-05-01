export const selectLogByUri = (uri) => {
  return (state) => state.logs[uri];
}
