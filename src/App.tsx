import { useState } from 'react'
import Clone from './Clone'
import Count from './Count'
import CounterContext from './hooks/CounterContext'
import './style.css'

function App() {
  return (
    <div className='app'>
      <CounterContext>
        <Count />
        <Clone />
      </CounterContext>
    </div>
  )
}

export default App
