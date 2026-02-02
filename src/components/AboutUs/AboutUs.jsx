import Title from '../../UI/Title/Title';
import './AboutUs.scss';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

const AboutUs = forwardRef((props, ref) => {

    const { t } = useTranslation();

    const els = ['./fGuy.webp', './secGuy.webp']

    return (
        <div className='AboutUs aboutus container fcc' ref={ref}>
            <Title title={t('aboutUs.title')} />
            <div className='AboutUs_content'>
                <div className='AboutUs_content_left fcc'>
                    <div className='AboutUs_content_left_title'>
                        {t('aboutUs.leftTitle')}
                    </div>
                    <div className='AboutUs_content_left_blue'>
                        {t('aboutUs.blue')}
                    </div>
                    <div className='AboutUs_content_left_description_top'>
                        {t('aboutUs.desTop')}
                    </div>
                    {/* <div className='AboutUs_content_left_description_bottom'>
                        {t('aboutUs.desBot')}
                    </div> */}
                </div>
                <div className='AboutUs_content_right'>
                    {
                        els.map((el, index) => (
                            <div className='AboutUs_content_el' key={`AboutUs_content_el_${index}`}>
                                <div className='AboutUs_content_el_top free_img'>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='AboutUs_content_el_top_corner AboutUs_content_el_top_corner_left'>
                                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" />
                                    </svg>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='AboutUs_content_el_top_corner AboutUs_content_el_top_corner_right'>
                                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" />
                                    </svg>

                                </div>
                                <img src={el} alt="" />
                                <div className='AboutUs_content_el_bottom free_img'>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='AboutUs_content_el_bottom_corner AboutUs_content_el_bottom_corner_left'>
                                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" />
                                    </svg>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='AboutUs_content_el_bottom_corner AboutUs_content_el_bottom_corner_right'>
                                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" />
                                    </svg>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
});

export default AboutUs;