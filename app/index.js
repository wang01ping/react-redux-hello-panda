require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const Account = require('./containers/Account');
const {configureStore} = require('./store/configureStore');
const { syncHistoryWithStore } = require('react-router-redux');
const { Router, Route, IndexRoute, browserHistory } = require('react-router');
const {Home, Panda, Science} = require('./views');
const {Login, Signup} = require('./views/account');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
require('./less/index.less');

render(
  <Provider store={store}>
    <div className="pageWrapper">
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="panda" component={Panda}/>
        <Route path="science" component={Science}/>
      </Route>
      <Route path="/account" component={Account}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Router>
    </div>
  </Provider>,
  document.getElementById('react-content')
)
