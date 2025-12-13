import AboutUs from './components/AboutUs/AboutUs'
import Background from './components/Background/Background'
import Customers from './components/Customers/Customers'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className='App'>
      <Hero />
      <Background />
      <Header />
      <AboutUs />
      <Customers />
      <Projects />
    </div>
  )
}

export default App
