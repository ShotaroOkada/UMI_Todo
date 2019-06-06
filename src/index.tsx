import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Area from './containers/Area';
import { createStore, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxLogger)
)

ReactDOM.render(
  <Provider store={store}>
    <Area />
  </Provider>,  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
