import './Contact.scss';
import { useTranslation } from 'react-i18next';

export default ({ invert }) => {

    const { t } = useTranslation();

    // const media = ['./social/insta.svg', './social/x.svg', './social/tg.svg', './social/mail.svg']

    const media = [
        {
            img: './social/insta.svg',
            href: "https://www.instagram.com/gd.frame?igsh=MXdxdnhtMDg2Mzkzdg=="
        },
        {
            img: './social/tg.svg',
            href: 'https://t.me/gdframe_manager'
        },
        {
            img: './social/mail.svg',
            href: 'mailto:gd.framee@gmail.com'
        }

        // {
        //     img: './social/x.svg',
        //     href: ''
        // }
    ]

    const handleClick = () => {
        console.log('Click');
    }

    return (
        <div className={`Contact fcc ${invert ? 'Contact_invert' : ''}`} id='contact'>
            <a className={`Contact_btn ${invert ? 'Contact_btn_invert' : ''}`} onClick={handleClick} href='https://t.me/gdframee' target='_blanck'>
                {t('contactUs.title')}
            </a>
            <div className='Contact_btns'>
                {
                    media.map((el, index) => (
                        <a href={el.href} target='_blanck'><img src={el.img} className={`Contact_btns_el ${invert ? 'Contact_btns_el_invert' : ''}`} key={`Contact_btns_el_${index}`}/></a>
                    ))
                }
            </div>
        </div>
    )
}