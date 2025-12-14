import UpBtn from '../../UI/UpBtn/UpBtn';
import './Gallery.scss';
import { useState, useRef, useEffect } from 'react';

export default () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [rect, setRect] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const items = Array(36).fill(0);

  const columns = [];
  for (let i = 0; i < items.length; i += 6) {
    columns.push(items.slice(i, i + 6));
  }

  const onImageClick = (e, idx) => {
    const r = e.currentTarget.getBoundingClientRect();
    setRect(r);
    setActiveIndex(idx);
    setExpanded(false);

    requestAnimationFrame(() => {
      setExpanded(true);
    });
  };

  const close = () => {
    setExpanded(false);
    setTimeout(() => {
      setActiveIndex(null);
      setRect(null);
    }, 500);
  };

  const prev = () => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i - 1 + items.length) % items.length;
    });
  };

  const nextImage = () => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i + 1) % items.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  const active = activeIndex !== null ? `./gallery/woman${activeIndex + 1}.webp` : null;

  return (
    <div className="Gallery container fcc">
      {columns.map((col, colIndex) => (
        <div className="Gallery_col" key={colIndex}>
          {col.map((_, index) => (
            <div className='Gallery_col_el fcc' key={`col_${colIndex}_${index}`}>
              <div className='Gallery_col_el_top free_img'>
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Gallery_col_el_top_left Gallery_col_el_top_el'>
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                </svg>
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Gallery_col_el_top_right Gallery_col_el_top_el'>
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                </svg>
              </div>
              <img
                key={`Gallery_${colIndex}_${index}`}
                src={`./gallery/woman${colIndex * 6 + index + 1}.webp`}
                alt=""
                onClick={(e) => onImageClick(e, colIndex * 6 + index)}
              />
              <div className='Gallery_col_el_bottom free_img'>
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Gallery_col_el_bottom_left Gallery_col_el_bottom_el'>
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                </svg>
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Gallery_col_el_bottom_right Gallery_col_el_bottom_el'>
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className='Gallery_up fcc'>
        <UpBtn />
      </div>

      {activeIndex !== null && rect && (
        <div className="Gallery_modal">
          <div className='Gallery_modal_left'>
              <img src="./btnArrow.svg" alt="prev" onClick={prev} />
          </div>
          <img
            src={active}
            className={`Gallery_modal_img ${expanded ? 'active' : ''}`}
            style={(() => {
              const initial = {
                top: `${rect.top}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                transform: 'translate(0, 0)'
              };
              if (expanded) {
                return {
                  top: '50%',
                  left: '50%',
                  width: '100vw',
                  height: '80vh',
                  transform: 'translate(-50%, -50%)'
                };
              }
              return initial;
            })()}
          />
          <div className='Gallery_modal_right'>
              <div className='Gallery_modal_right_exit'>
                <img src="./close.svg" alt="" onClick={close}/>
              </div>
              <img src="./btnArrow.svg" alt="next" onClick={nextImage} />
              <div className='Gallery_modal_right_inner'></div>
          </div>
        </div>
      )}
    </div>
  );
};
