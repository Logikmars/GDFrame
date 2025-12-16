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
            title: t('projects.titleSloboj'),
            description: t('projects.descriptionSloboj'),
            href: 'https://www.youtube.com/watch?v=FvVrc4G4n00&t=306s'
            // Слобоженко
        },
        {
            big: true,
            type: t('projects.type'),
            typetext: t('projects.video'),
            director: t('projects.director'),
            directortext: t('projects.directorNameF'),
            img: './videosScreen/plane.webp',
            title: t('projects.titleBiznes'),
            description: t('projects.descriptionBisznes'),
            href: 'https://www.youtube.com/watch?v=uac_XfqgDYY&t=98s'
            // Бизнес
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/biznes.webp',
            title: t('projects.titleBarber'),
            description: t('projects.descriptionBarber'),
            href: 'https://youtu.be/RApaChu5H9w'

            // barber
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/kizaru.webp',
            title: t('projects.titleKizaru'),
            description: t('projects.descriptionKizaru'),
            href: 'https://www.youtube.com/watch?v=_PSdZUIFNK8'

            // kizaru zloy
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/carLight.webp',
            title: t('projects.titleMission'),
            description: t('projects.descriptionMission'),
            href: 'https://youtu.be/caR17T-g63U'

            // mission
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/man.webp',
            title: t('projects.TitlePavel'),
            description: t('projects.descriptionPavel'),
            href: 'https://www.youtube.com/watch?v=TznsMYVL7mI'

            // Pavlik
        },
        {
            big: false,
            type: t('projects.type'),
            typetext: t('projects.video'),
            img: './videosScreen/joker.webp',
            title: t('projects.TitleJoker'),
            description: t('projects.descriptionJoker'),
            href: 'https://www.youtube.com/watch?v=-jBtVnORxv4'
            // Джокер
        }
    ]

    return (
        <div className='Projects container' id='video'>
            {
                projects.map((el, index) => (
                    <Project big={el.big} type={el.type} typetext={el.typetext} director={el.director} directortext={el.directortext} img={el.img} title={el.title} description={el.description} href={el.href} key={`Project_el_key_${index}`}/>
                ))
            }
        </div>
    )
}