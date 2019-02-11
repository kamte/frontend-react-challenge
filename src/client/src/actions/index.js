import axios from 'axios';
import {FETCH_PHONES, FETCH_PHONE} from './types'

const API_URL = 'http://localhost:4000/phones';

export const fetchPhones = (data) => {
  return {
    type: FETCH_PHONES,
    payload: data.phones,
  }
};

export const fetchAllPhones = (page = 1) => {
  return (dispatch) => {
    const url = `${API_URL}?page=${page}&itemsPerPage=8`;
    console.log(url);
    setTimeout(() => {
      return axios.get(url)
        .then(response => {
          dispatch(fetchPhones(response.data))
        })
        .catch(error => {
          throw(error);
        });
    }, 2000);
  };
};

export const fetchPhone = data => {
  return {
    type: FETCH_PHONE,
    payload: data.phone,
  }
}

export const fetchSinglePhone = id => {
  return (dispatch) => {
    return axios.get(`${API_URL}/${id}`)
      .then(response => {
        dispatch(fetchPhone(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};