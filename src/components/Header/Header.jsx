import LanguageSwitch from '../../UI/LanguageSwitch/LanguageSwitch';
import Logo from '../../UI/Logo/Logo';
import './Header.scss';
export default () => {

    const els = ['Photo production', 'Video production', 'About us', 'Clients', 'Contact']

    return (
        <div className='Header fcc'>
            <div className='container Header_container fcc'>
                <div className='Header_logo'>
                    <Logo invert/>
                </div>
                <div className='Header_content fcc'>
                    <div className='Header_content_nav'>
                        {
                            els.map((el, index) => (
                                <a href='#' className='Header_content_nav_el' key={`Header_content_nav_el_${index}`}>{el}</a>
                            ))
                        }
                    </div>
                    <div className='Header_content_switch'>
                        <LanguageSwitch />
                    </div>
                </div>
            </div>
        </div>
    )
}