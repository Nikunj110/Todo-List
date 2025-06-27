import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
      <h1>Hello OOOOOOo</h1>
    )
}

const ReactEle = (
  <a href='https://google.com'>click here</a>
)

const anotherUser  = "chai aur react"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
  
    {ReactEle}
    <MyApp />
    {ReactElement}
  </StrictMode>
)
