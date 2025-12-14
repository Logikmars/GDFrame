import Type from '../Type/Type';
import './Project.scss';
export default ({ big, type, typetext, director, directortext, img, title, description }) => {
    return (
        <div className={`Project ${big && 'Project_big'}`}>
            <div className='Project_header fcc'>
                <Type type={type} text={typetext}/>
                {director && <Type type={director} text={directortext} />}
            </div>
            <div className='Project_content'>
                <img src={img} alt="" />
            </div>
            <div className={`Project_title ${!big && 'Project_title_small'}`}>
                {title}
            </div>
            <div className='Project_description'>
                {description}
            </div>
        </div>
    )
}