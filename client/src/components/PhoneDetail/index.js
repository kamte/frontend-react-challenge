import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PhoneDetail.css';
import backArrow from './Back_Arrow.svg';

class PhoneDetail extends Component {
  constructor(props) {
    super(props);
    const id = parseInt(props.match.params.id, 10);
    this.props.onFetchPhone(id);
  }

  render() {
    const {img, title, price, description} = this.props;
    return (
      <div className="PhoneDetail">
        <Link to="/">
          <img className="PhoneDetail__back" src={backArrow} alt="go back"/>
        </Link>
        <div>
          <img src={img} className="PhoneDetail__logo" alt={title}/>
          <h2>{title}</h2>
          <span><b>Price:</b> {price}€</span>
          <p><b>Description:</b> {description}</p>
        </div>
      </div>
    );
  }
}

PhoneDetail.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

export default PhoneDetail;
