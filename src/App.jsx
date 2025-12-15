import { useState, useRef, useEffect } from 'react';

import AboutUs from './components/AboutUs/AboutUs'
import Background from './components/Background/Background'
import Customers from './components/Customers/Customers'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './UI/Contact/Contact'

function App() {
  const [invert, setInvert] = useState(false);
  const heroTopRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInvert(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px 0px 0px',
      }
    );

    if (heroTopRef.current) {
      observer.observe(heroTopRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className="App_contact">
        <Contact invert={invert} />
      </div>

      {/* sentinel — верх Hero */}
      <div ref={heroTopRef} />

      <Hero />
      <Background />
      <Header />
      <AboutUs />
      <Customers />
      <Projects />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
