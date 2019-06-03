import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checksActions from '../actions/checks'; 
import ChecksInfo from '../components/ChecksInfo';

const mapStateToProps = ({ checks }) => ({
  checks
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(checksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChecksInfo);