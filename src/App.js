import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar';
import NavFooter from './components/Nav/NavFooter';
import loadedState from './initialState';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import ErrorBoundaryContainer from './components/Error/ErrorBoundaryContainer';
import Oops from './components/Error/Oops';
import Home from './components/Home/Home';
import NotFoundPage from './components/Error/NotFoundPage';

const cacheStore = window.sessionStorage.getItem('redux-store');
const initialState = cacheStore ? JSON.parse(cacheStore) : loadedState;
const store = applyMiddleware(thunk)(createStore)(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const saveState = () => {
  window.sessionStorage.setItem(
    'redux-store',
    JSON.stringify(store.getState())
  );
};

const GA_TRACKING_ID = 'UA-124331187-10';

ReactGA.initialize(GA_TRACKING_ID);
function logPageView(location, action) {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}
const history = createBrowserHistory();
history.listen((location, action) => {
  logPageView(location, action);
});

store.subscribe(function() {
  console.log(store.getState());
});

store.subscribe(saveState);

class App extends Component {
  componentWillMount() {
    logPageView(window.location, '');
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ErrorBoundaryContainer>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} store={store} />
              <Route exact path='/oops' component={Oops} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
            <NavFooter />
          </ErrorBoundaryContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;
