import React from 'react'
import { Provider } from 'react-redux'
import './css/App.css'
import logo from './img/logo.svg'
import store from './store'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav></nav>
      <article>
        <section></section>
      </article>
      <aside></aside>
      <footer></footer>
    </div>
  </Provider>
)

export default App
