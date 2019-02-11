import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PhoneDetail.css';

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
        <img src={img} className="PhoneDetail__logo" alt={title}/>
        <h2>{title}</h2>
        <span>{price}€</span>
        <p>{description}</p>
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
