import { connect } from 'react-redux';
import CommitList from '../components/commit-list';
import Async from '../utils/async';
import { requestLog, isLoadingLog } from '../actions/log';
import { selectLogByUri } from '../selectors/log';

const getCommitContents = (commit) => {
  return {
    author: commit.author().name,
    id: commit.id().tostrS(),
    message: commit.message(),
    date: commit.date().toString(),
  }
}

const mapStateToProps = (uri) => (state) => {
  return {
    commits: selectLogByUri(uri)(state).map(getCommitContents),
  }
}

class Log extends Async {
  request() {
    return requestLog(this.props.uri);
  }

  isLoading() {
    return isLoadingLog(this.props.uri);
  }

  renderContent() {
    return React.createElement(connect(mapStateToProps(this.props.uri))(CommitList));
  }
}
export default connect((state) => state)(Log);
