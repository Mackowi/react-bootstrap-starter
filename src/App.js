import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import './Custom.scss'
import { createContext, useState } from 'react'

export const ThemeContext = createContext('null')

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme}`}>
        <Router>
          {/* <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer /> */}
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}
export default App
