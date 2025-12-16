import { useState, useRef, useEffect } from 'react';

import AboutUs from './components/AboutUs/AboutUs'
import Background from './components/Background/Background'
import Customers from './components/Customers/Customers'
import Footer from './components/Footer/Footer'
import { Gallery, GalleryModal } from './components/Gallery/Gallery'
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

    const bottomObs = new IntersectionObserver(([e]) => {
      // true, когда элемент УЖЕ ниже нижней границы экрана
      setbotInvert(!(e.boundingClientRect.bottom > window.innerHeight));
    });

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



  // GALLERY
  const TOTAL = 36;

  const [activeIndex, setActiveIndex] = useState(null);
  const [rect, setRect] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [closing, setClosing] = useState(false);

  const isOpen = activeIndex !== null;

  const open = (e, idx) => {
    const r = e.currentTarget.getBoundingClientRect();
    setRect(r);
    setActiveIndex(idx);
    setExpanded(false);
    requestAnimationFrame(() => setExpanded(true));
  };

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setActiveIndex(null);
      setRect(null);
      setExpanded(false);
    }, 500);
  };

  const prev = () => {
    setActiveIndex((i) => (i == null ? i : (i - 1 + TOTAL) % TOTAL));
  };

  const next = () => {
    setActiveIndex((i) => (i == null ? i : (i + 1) % TOTAL));
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);


  return <>
    <Header show={showHeader} />

    <GalleryModal
      isOpen={isOpen}
      activeIndex={activeIndex}
      rect={rect}
      expanded={expanded}
      closing={closing}
      onPrev={prev}
      onNext={next}
      onClose={close}
      total={TOTAL}
    />
    <div className="App_contact">
      <Contact invert={botInvert} />
    </div>
    <div className='App_wrapper' ref={wrapperRef}>
      <div className="App" ref={contentRef}>
        <Hero />
        <div className='heroTopRef' ref={heroTopRef} />
        <AboutUs />
        <Customers />
        <Projects />
        <Gallery onOpen={open} total={TOTAL} />

        <Footer />
      </div >
    </div >
  </>
}

export default App;
