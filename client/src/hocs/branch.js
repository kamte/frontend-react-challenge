import React from 'react';

const branch = (predicate, Left, Right) => {
  return (props) => predicate(props) ? <Left {...props} /> : <Right {...props}/>
};

export default branch;