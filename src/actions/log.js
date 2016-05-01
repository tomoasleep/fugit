import { requestRepository } from './repository';
import { selectRepositoryByUri } from '../selectors/repository';
import Request from '../utils/request';
import { isRequestFinished } from '../utils/request-functions';

export const RECEIVE_LOG = 'RECEIVE_LOG';
const receiveLog = (uri, log) => {
  return {
    type: RECEIVE_LOG,
    uri, log,
  };
}

const getCommits = (repository, num = 5) => {
  return repository.getHeadCommit().then((commit) => {
      return commit.getParents(num - 1).
        then((commits) => [commit].concat(commits))
  });
}

const ridForGetLog = (uri) => `log/${uri}`

export const isLoadingLog = uri => state => !isRequestFinished(state, ridForGetLog(uri));
export const requestLog = (uri) => {
  return new Request(ridForGetLog(uri), ({ dispatch, getState }) => {
    return dispatch(requestRepository(uri)).then(() => {
      let repository = selectRepositoryByUri(uri)(getState());
      return getCommits(repository).then(commits => dispatch(receiveLog(uri, commits)));
    });
  });
}
