import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter ><Search /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})