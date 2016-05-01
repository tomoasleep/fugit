import { Spinner } from 'react-mdl';

export default class Async extends React.Component {
  static get contextTypes() {
    return { store: React.PropTypes.any };
  }

  constructor(props, context) {
    super(props, context)
    this.store = props.store || context.store;
    this.request_ = props.request || this.request();
    this.isLoading_ = props.isLoading || this.isLoading();
  }

  componentDidMount() {
    this.store.dispatch(this.request_);
  }

  render() {
    let loading = this.isLoading_(this.store.getState());

    return (loading ? <Spinner /> : this.renderContent())
  }

  renderContent() {
    return this.props.children;
  }
}
