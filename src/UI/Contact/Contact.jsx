import './Contact.scss';
export default ({ invert }) => {

    const media = ['./social/insta.svg', './social/x.svg', './social/tg.svg', './social/mail.svg']

    const handleClick = () => {
        console.log('Click');
    }

    return (
        <div className={`Contact fcc ${invert ? 'Contact_invert' : ''}`}>
            <div className={`Contact_btn ${invert ? 'Contact_btn_invert' : ''}`} onClick={handleClick}>
                CONTACT US
            </div>
            <div className='Contact_btns'>
                {
                    media.map((el, index) => (
                        <a href="#"><img src={el} className={`Contact_btns_el ${invert ? 'Contact_btns_el_invert' : ''}`} key={`Contact_btns_el_${index}`}/></a>
                    ))
                }
            </div>
        </div>
    )
}