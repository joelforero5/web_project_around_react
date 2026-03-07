import { useState } from 'react'
import '../index.css'
import './header/Header.jsx'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import Main from './main/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page__content">
      <Header />
      <Main />
      <Footer />
      </div>
    </>
  )
}

export default App
