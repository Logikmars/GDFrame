import Type from '../Type/Type';
import './Project.scss';
export default ({ big, type, director, img, title, description }) => {
    return (
        <div className={`Project ${big && 'Project_big'}`}>
            <Type type={'Type'} text={'lalalalallal'}/>
            {/* TODO */}
        </div>
    )
}