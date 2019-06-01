import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Area from './components/Area';

ReactDOM.render(
  <Area />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
