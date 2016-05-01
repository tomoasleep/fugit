export const selectRepositoryByUri = (uri) => {
  return (state) => state.repositories[uri];
}
