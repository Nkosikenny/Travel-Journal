import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './components/data'

function App() {
  const cardComponent = data.map(items => {
    return (<Card
      item={items}
    />
    )
  })

  return (
    <>
      <Navbar />
      <div className='card'>
        {cardComponent}
      </div>


    </>
  )
}


export default App
