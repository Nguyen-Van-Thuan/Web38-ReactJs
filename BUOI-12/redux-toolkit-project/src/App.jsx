import React from 'react'
import DisplayValue from './DisplayValue'
import Calculator from './Calculator'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <DisplayValue/>
      <Calculator/>
    </Provider>
  )
}

export default App