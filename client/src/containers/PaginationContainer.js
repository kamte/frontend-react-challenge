import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import {fetchPhonesPage} from '../actions';
import '../components/Pagination.css';

const mapStateToProps = state => ({
  totalItemsCount: state.pagination.count,
  itemsCountPerPage: state.pagination.itemCountPerPage,
  activePage: parseInt(state.pagination.pageNumber, 10),
});

const mapDispatchToProps = dispatch => ({
  onChange: page => {
    dispatch(fetchPhonesPage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);