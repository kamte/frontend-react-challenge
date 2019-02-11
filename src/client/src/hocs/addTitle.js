import React from 'react';

const addTitle = (title, Component) => (props) => (
  <div>
    <h1>{title}</h1>
    <Component {...props}/>
  </div>
);

export default addTitle;