import Project from '../../UI/Project/Project';
import './Projects.scss';
import { useTranslation } from 'react-i18next';

export default () => {

    const { t } = useTranslation();

    const projects = [
        {
            big: true,
            type: t('projects.type'),
            typetext: t('projects.video'),
            director: t('projects.director'),
            directortext: t('projects.directorNameF'),
            img: './videosScreen/car.webp',
            title: t('projects.title'),
            description: t('projects.description')
        },
        {
            big: true,
            type: t('projects.type'),
            typetext: t('projects.video'),
            director: t('projects.director'),
            directortext: t('projects.directorNameF'),
            img: './videosScreen/plane.webp',
            title: t('projects.title'),
            description: t('projects.description')
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/biznes.webp',
            title: t('projects.descriprionBiznes'),
            description: t('projects.description')
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/kizaru.webp',
            title: t('projects.descriprionKizaru'),
            description: t('projects.description')
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/carLight.webp',
            title: t('projects.descriprionPavel'),
            description: t('projects.description')
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/man.webp',
            title: t('projects.descriprionPavel'),
            description: t('projects.description')
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/joker.webp',
            title: t('projects.descriprionJoker'),
            description: t('projects.description')
        }
    ]

    return (
        <div className='Projects container'>
            {
                projects.map((el, index) => (
                    <Project big={el.big} type={el.type} typetext={el.typetext} director={el.director} directortext={el.directortext} img={el.img} title={el.title} description={el.description} key={`Project_el_key_${index}`}/>
                ))
            }
        </div>
    )
}