import React from 'react';
import {Link} from 'react-router-dom';


const toList = (getter, Component) => (props) => {
  return (<div className="PhoneList">
    {getter(props).map(item => <Link key={String(item.id)} to={`/detail/${item.id}`}><Component {...item}/> </Link>)}
    </div>
  );
}

export default toList;