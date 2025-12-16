import { useRef, useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import Percent from '../../UI/Percent/Percent';
import './Hero.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
export default () => {

    const scope = useRef(null)
    const [progress, setprogress] = useState(0);
    const { t } = useTranslation();

    useGSAP(() => {
        gsap.to('.Hero', {
            ease: 'none',
            scrollTrigger: {
                trigger: '.Hero',
                scrub: 1,
                start: `0% 0%`,
                end: `100% 100%`,
                pin: '.Hero_container',
                // markers: true,
                pinSpacing: true,
                anticipatePin: 1,
                onUpdate: self => {
                    setprogress(self.progress)
                }
            }
        });
    }, { scope })


    return (
        <div ref={scope}>


            <div class="box"></div>
            <div className='Hero'>
                <div className='Hero_container'>
                    <Logo />
                    <div className='Hero_content'>
                        <div className='free_img Hero_scroll' style={{
                            opacity: progress < .01 ? 1 : 0
                        }}>
                            <div className='Hero_scroll_inner'>
                                <img src="/scrollDownMob.png" className='Hero_scroll_inner_mob' alt="" />
                                {t('hero.scroll')}
                                <img src="/scrollDown.png" className='Hero_scroll_inner_pc' alt="" />
                            </div>
                        </div>

                        <div className='free_img Hero_mask' style={{
                            opacity: progress < .01 ? 0 : 1
                        }}>
                            <div className={`Hero_mask_inner Hero_mask_inner_${Math.min(11, Math.floor(progress * 1.1 * 11))}`}></div>
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_1'
                            style={{
                                opacity: progress < .5 ? 0 : 1
                            }}
                        >
                            <img src="/heroDecor/1.svg" alt="" style={{
                                transform: `rotate(${progress * 50}deg)`
                            }} />
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_2'
                            style={{
                                opacity: progress < .4 ? 0 : 1
                            }}
                        >
                            <img src="/heroDecor/2.svg" alt="" style={{
                                transform: `rotate(${progress * -80}deg)`
                            }} />
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_3'
                            style={{
                                opacity: progress < .1 ? 0 : 1
                            }}>
                            <img src="/heroDecor/3.svg" alt="" style={{
                                transform: `rotate(${progress * 20}deg)`
                            }} />
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_4'
                            style={{
                                opacity: progress < .2 ? 0 : 1
                            }}>
                            <img src="/heroDecor/4.svg" alt="" style={{
                                transform: `rotate(${progress * -10}deg)`
                            }} />
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_5'
                            style={{
                                opacity: progress < .6 ? 0 : 1
                            }}>
                            <img src="/heroDecor/5.svg" alt="" style={{
                                transform: `rotate(${progress * 100}deg)`
                            }} />
                        </div>
                        <div className='free_img Hero_content_img Hero_content_img_6' style={{
                            opacity: progress < .01 ? 0 : 1
                        }}>
                            <div className={`Hero_decorList Hero_decorList_${Math.min(11, Math.floor(progress * 1.1 * 11))}`}>
                            </div>
                        </div>
                    </div>
                    <div className='Hero_down fcc'>
                        <Percent percent={Math.floor(progress * 100)} />
                    </div>
                </div>
            </div>
        </div>
    )
}