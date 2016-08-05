require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const {configureStore} = require('./store/configureStore');
const { syncHistoryWithStore } = require('react-router-redux');
const { browserHistory } = require('react-router');


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('app')
)
