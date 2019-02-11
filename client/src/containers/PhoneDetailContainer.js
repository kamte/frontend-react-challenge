import { connect } from 'react-redux';
import PhoneDetail from '../components/PhoneDetail/';
import { fetchSinglePhone } from '../actions';

const mapStateToProps = state => ({...state.phoneDetail});

const mapDispatchToProps = dispatch => ({
  onFetchPhone: phoneId => {
    dispatch(fetchSinglePhone(phoneId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneDetail);