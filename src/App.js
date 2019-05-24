import React from 'react'
import { Provider } from 'react-redux'
import './css/App.css'
import logo from './img/logo.svg'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
