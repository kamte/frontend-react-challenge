import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhoneDetailContainer from '../containers/PhoneDetailContainer';
import PhoneListContainer from '../containers/PhoneListContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/detail/:id" component={
          PhoneDetailContainer} />
        <Route path="/" component={PhoneListContainer} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root