import { connect } from 'react-redux';
import {compose} from 'ramda';
import Spinner from '../components/Spinner';
import PhoneItem from '../components/PhoneItem/';
import '../components/PhoneList/PhoneList.css';
import branch from '../hocs/branch';
import toList from '../hocs/toList';
import addTitle from '../hocs/addTitle';

const PhoneList = addTitle('React Phone List', toList(({phones}) => phones, PhoneItem));

const mapStateToProps = state => ({
  phones: state.phones,
});

const enhance = compose(
  connect(mapStateToProps),
  (List) => branch(({ phones }) => !Boolean(phones.length), addTitle('Loading...', Spinner), List),
);

export default enhance(PhoneList);

