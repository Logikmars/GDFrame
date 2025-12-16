import { useState } from 'react';
import LanguageSwitch from '../../UI/LanguageSwitch/LanguageSwitch';
import Logo from '../../UI/Logo/Logo';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import { smoothScrollTo } from '../../scroller';

export default ({ show = false }) => {

    const { t } = useTranslation();

    const els = [
        {
            text: t('header.photo'),
            to: '.photo',
        },
        {
            text: t('header.video'),
            to: '.video',
        },
        {
            text: t('header.about'),
            to: '.aboutus',
        },
        {
            text: t('header.clients'),
            to: '.clients',
        },
        {
            text: t('header.contact'),
            to: '.contact',
        },
    ];

    const [active, setactive] = useState(false);

    return (
        <div className={`Header ${show && 'Header_show'} fcc`} >
            <div className='container Header_container fcc'>
                <div className='Header_logo'>
                    <Logo invert />
                    <div className='Header_open' onClick={() => { setactive(true) }}>
                        <span className='Header_open_top'></span>
                        <span className='Header_open_top'></span>
                        <span className='Header_open_bottom'></span>
                    </div>
                </div>
                <div className='Header_content fcc'>
                    <div className='Header_content_nav'>
                        {
                            els.map((el, index) => (
                                <a
                                    //  href={el.to}
                                    onClick={() => { smoothScrollTo(el.to) }}
                                    className='Header_content_nav_el' key={`Header_content_nav_el_${index}`}>{el.text}</a>
                            ))
                        }
                    </div>
                    <div className='Header_content_switch'>
                        <LanguageSwitch />
                    </div>
                </div>
                <div className={`Header_modal ${active && 'Header_modal_active'} fcc`} onClick={() => { setactive(false) }}>
                    <div className='Header_modal_content fcc' onClick={(e) => { e.stopPropagation() }}>
                        <Logo invert />
                        <LanguageSwitch />
                        {
                            els.map((el, index) => (
                                <a
                                    onClick={() => {
                                        smoothScrollTo(el.to)

                                        setactive(false)
                                    }}

                                    className='Header_content_nav_el' key={`Header_content_nav_el_${index}`}>{el.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}