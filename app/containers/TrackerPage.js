import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tracker from '../components/Tracker';
import * as TrackerActions from '../actions/tracker';

function mapStateToProps(state) {
  return {
    tracker: state.tracker
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TrackerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
