import { useState } from 'react'

import Header from './components/templates/header'
import Section from './components/section'
import Footer from './components/templates/footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  )
}

export default App
