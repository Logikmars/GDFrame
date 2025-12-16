import Contact from '../../UI/Contact/Contact';
import Logo from '../../UI/Logo/Logo';
import Percent from '../../UI/Percent/Percent';
import './Hero.scss';
export default () => {
    return (
        <div className='Hero fcc'>
            <div className='container Hero_container fcc'>
                <Logo />
                <div className='Hero_content'>
                    {/* TODO */}
                </div>
                <div className='Hero_down fcc'>
                    <div className='Hero_down_inner'></div>
                    <div className='Hero_down_percent fcc'>
                        <Percent percent={94} />
                    </div>
                    <div className='Hero_down_contact fcc'>
                        {/* <Contact /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}