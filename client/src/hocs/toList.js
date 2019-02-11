import React from 'react';
import {Link} from 'react-router-dom';
import PaginationContainer from '../containers/PaginationContainer'

const toList = (getter, Component) => (props) => {
  return (<div className="PhoneList">
    <div className="PhoneList__items">
      {getter(props).map(item => <Link key={String(item.id)} to={`/detail/${item.id}`}><Component {...item}/> </Link>)}
    </div>
    <PaginationContainer/>
    </div>
  );
}

export default toList;