import { observer } from 'mobx-react-lite';
import languageStore from '../../store/languageStore';
import './LanguageSwitch.scss';

export default observer(() => {

    const els = ['RU', 'ENG']

    const changeLanguage = (lang) => {
        languageStore.setActiveLanguage(lang);
    }

    return (
        <div className='LanguageSwitch'>
            {
                els.map((el, index) => (
                    <div className={`LanguageSwitch_el ${languageStore.activeLanguage == el ? 'LanguageSwitch_el_active' : ''}`} key={`LanguageSwitch_el_${index}`} onClick={() => changeLanguage(el)}>{el}</div>
                ))
            }
        </div>
    )
})