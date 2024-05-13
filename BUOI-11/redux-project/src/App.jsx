import React from 'react'
import Button from './component/Button'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Button/>
    </Provider>
  )
}

export default App