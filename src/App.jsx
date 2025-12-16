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
    <Header show={invert} />
    <div className="App_contact">
      <Contact invert={invert} />
    </div>
    <div className='App_wrapper' ref={wrapperRef}>
      <div className="App" ref={contentRef}>

        <div ref={heroTopRef} />

        <Hero />
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
