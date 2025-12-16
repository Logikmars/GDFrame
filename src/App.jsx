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


import { smoothScrollTo } from "./scroller";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);


function App() {
  const [botInvert, setbotInvert] = useState(false);
  const [showHeader, setshowHeader] = useState(false);
  const heroTopRef = useRef(null);

  useEffect(() => {
    const el = heroTopRef.current;
    if (!el) return;

    const topObs = new IntersectionObserver(
      ([e]) => {
        // true, когда элемент УЖЕ выше верхней границы (проскроллили вниз)
        setshowHeader(e.boundingClientRect.top < 0);
      },
      {
        threshold: 0,
        rootMargin: '0px',
      }
    );

    const bottomObs = new IntersectionObserver(
      ([e]) => setbotInvert(!e.isIntersecting),
      { threshold: 0, rootMargin: '-99% 0px 0px 0px' } // нижняя "полоса" 1% экрана
    );

    topObs.observe(el);
    bottomObs.observe(el);

    return () => {
      topObs.disconnect();
      bottomObs.disconnect();
    };
  }, []);

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const smootherRef = useRef(null)

  useGSAP(() => {
    const isMobile = ScrollTrigger.isTouch || window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (!isMobile) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
      });
    }
  }, []);



  return <>
    <Header show={showHeader} />
    <div className="App_contact">
      <Contact invert={botInvert} />
    </div>
    <div className='App_wrapper' ref={wrapperRef}>
      <div className="App" ref={contentRef}>

        <Hero />
        <div className='heroTopRef' ref={heroTopRef} />
        <Background />
        <AboutUs />
        <Customers />
        <Projects />
        <Gallery />
        <Footer />
      </div>
    </div>
  </>
}

export default App;
