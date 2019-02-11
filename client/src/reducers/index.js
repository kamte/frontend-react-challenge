import {FETCH_PHONES, FETCH_PHONE} from '../actions/types';

const initialState = {
  phones: [],
  phoneDetail: {},
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PHONES:
      return Object.assign({}, state, {
        phones: action.payload,
        pagination: action.pagination,
      });

    case FETCH_PHONE:
      return Object.assign({}, state, {
        phoneDetail: action.payload,
      });
    default:
  }

  return state;
};

export default rootReducer;