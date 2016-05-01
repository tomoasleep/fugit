import Git from 'nodegit';
import Request from '../utils/request';

export const RECEIVE_REPOSITORY = 'RECEIVE_REPOSITORY';
const receiveRepository = (uri, repository) => {
  return {
    type: RECEIVE_REPOSITORY,
    uri, repository,
  };
}

export const ridForGetRepostitory = (uri) => `repositories/${uri}`

export const requestRepository = (uri) => {
  return new Request(ridForGetRepostitory(uri), ({ dispatch }) => {
    return Git.Repository.open(uri).then(repository => {
      dispatch(receiveRepository(uri, repository));
    });
  });
}
