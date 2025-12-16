import { useState } from 'react';
import Contact from '../../UI/Contact/Contact';
import SliderBtns from '../../UI/SliderBtns/SliderBtns';
import Title from '../../UI/Title/Title';
import './Customers.scss';
import { useTranslation } from 'react-i18next';

export default () => {

    const { t } = useTranslation();

    const els = [
        { src: './customers/yodezeen_2x_hq.webp', title: 'yodezeen' },
        { src: './customers/annatrincher_2x_hq.webp', title: 'annatrincher' },
        { src: './customers/slobozhenko_2x_hq.webp', title: <>alex <br /> slobozhenko</> },
        { src: './customers/zloylive_2x_hq.webp', title: 'zloylive' },
        { src: './customers/korolova_2x_hq.webp', title: 'korolova.dj' },
        { src: './customers/kizaru_2x_hq.webp', title: <>OLEG <br /> KIZARU</> },
        { src: './customers/tymoshenko_2x_hq.webp', title: 'tymoshenko' },
        { src: './customers/lerarumaa_2x_hq.webp', title: 'lera_rumaa' },
        { src: './customers/lera_2x_hq.webp', title: 'lera_rumaa' },
        { src: './customers/sashachistova_2x_hq.webp', title: 'sashachistova' }
    ];

    const CARD_WIDTH = 178 + 24;
    const VISIBLE_CARDS = Math.floor(window.innerWidth / CARD_WIDTH);

    const [index, setIndex] = useState(0);

    const maxIndex = Math.max(els.length - VISIBLE_CARDS, 0);

    const next = () => {
        setIndex(prev =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const prev = () => {
        setIndex(prev =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    return (
        <div className='Customers container fcc'>
            <div className='Customers_header fcc'>
                <Title title={t('customers.title')} />
                <SliderBtns onPrev={prev} onNext={next} />
            </div>

            {/* <div className='Customers_decor free_img'>
                <Contact invert />
            </div> */}

            <div className='Customers_slider'>
                <div
                    className='Customers_slider_track'
                    style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
                >
                    {els.map((el, i) => (
                        <div className='Customers_slider_el' key={i}>
                            <img src={el.src} alt="" />
                            <div className='Customers_slider_el_text'>
                                {el.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
