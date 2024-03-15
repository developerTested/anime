import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import routeList from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={routeList} />
    </Provider>
  </React.StrictMode>,
)
