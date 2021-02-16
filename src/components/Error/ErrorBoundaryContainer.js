import { connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import { handleError } from '../../actions/Error/errorActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  handleError() {
    dispatch(handleError());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ErrorBoundary)
);
