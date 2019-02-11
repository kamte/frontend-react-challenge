import React from 'react';
import PropTypes from 'prop-types';
import PhoneItem from './PhoneItem';
import {Link} from 'react-router-dom';
import './PhoneList.css';

const PhoneList = ({phones}) => {
  return (<div className="PhoneList">
    {phones.map(phone => <Link key={String(phone.id)} to={`/detail/${phone.id}`}><PhoneItem {...phone}/> </Link>)}
    </div>
  );
}

PhoneList.propTypes = {
  phones: PropTypes.array,
};

PhoneList.defaultProps = {
  phones: [],
}

export default PhoneList;
