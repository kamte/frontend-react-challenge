import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PhoneItem.css';

class PhoneItem extends Component {
  render() {
    const {img, title, price} = this.props;
   
    return (
        <div className="PhoneItem">
          <img src={img} className="PhoneItem__logo" alt={title}/>
          <h2>{title}</h2>
          <span>{price}€</span>
        </div>
     
    );
  }
}

PhoneItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default PhoneItem;
