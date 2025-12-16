import UpBtn from '../../UI/UpBtn/UpBtn';
import './Gallery.scss';
import { useEffect, useState } from 'react';

export const GalleryModal = ({
  isOpen,
  activeIndex,
  rect,
  expanded,
  closing,
  onPrev,
  onNext,
  onClose,
  total = 36,
}) => {
  if (!isOpen || activeIndex == null || !rect) return null;

  const active = `./gallery/woman${activeIndex + 1}.webp`;

  const style = expanded
    ? {
      top: '50%',
      left: '50%',
      width: '100vw',
      height: '80vh',
      transform: 'translate(-50%, -50%)',
    }
    : {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: 'translate(0, 0)',
    };

  return (
    <div className={`Gallery_modal ${closing ? 'closing' : ''}`}>
      <div className="Gallery_modal_left">
        <div className='Gallery_modal_rlBtn' onClick={onPrev}>

          <img src="./btnArrow.svg" alt="prev" />
        </div>
      </div>

      <img
        src={active}
        className={`Gallery_modal_img ${expanded ? 'active' : ''}`}
        style={style}
      />

      <div className="Gallery_modal_right" >
        <div className="Gallery_modal_right_exit">
          <img src="./close.svg" alt="" onClick={onClose} />
        </div>
        <div className='Gallery_modal_rlBtn' onClick={onNext}>
          <img src="./btnArrow.svg" alt="next" />
        </div>
        <div className="Gallery_modal_right_inner" />
      </div>
    </div>
  );
};

export const Gallery = ({ onOpen, total = 36 }) => {
  return (
    <div className="Gallery container fcc">
      <div className="Gallery_content">
        {Array(total)
          .fill(0)
          .map((_, index) => (
            <div className="Gallery_col_el fcc" key={`col__${index}`}>
              <div className="Gallery_col_el_top free_img">
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Gallery_col_el_top_left Gallery_col_el_top_el"
                >
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D" />
                </svg>
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Gallery_col_el_top_right Gallery_col_el_top_el"
                >
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D" />
                </svg>
              </div>

              <img
                src={`./gallery/woman${index + 1}.webp`}
                alt=""
                onClick={(e) => onOpen(e, index)}
              />

              <div className="Gallery_col_el_bottom free_img">
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Gallery_col_el_bottom_left Gallery_col_el_bottom_el"
                >
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D" />
                </svg>
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Gallery_col_el_bottom_right Gallery_col_el_bottom_el"
                >
                  <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D" />
                </svg>
              </div>
            </div>
          ))}
      </div>

      <div className="Gallery_up fcc">
        <UpBtn />
      </div>
    </div>
  );
};
