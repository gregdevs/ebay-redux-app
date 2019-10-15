import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { config } from './router/config';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">     
          {config.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            ))}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
