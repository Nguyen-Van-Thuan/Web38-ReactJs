import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import css dashboad
import "./assets/css/bootstrap.min.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/apexcharts.css"
import "./assets/css/main.css"

// import js dasbhoad
import "./assets/js/jquery.min.js"
import "./assets/js/bootstrap.bundle.min.js"
import "./assets/js/apexcharts.min.js"
import "./assets/js/custom.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
