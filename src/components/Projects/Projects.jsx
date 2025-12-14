import Project from '../../UI/Project/Project';
import './Projects.scss';
export default () => {

    const projects = [
        {
            big: true,
            type: 'Type',
            typetext: 'Video production',
            director: 'Director',
            directortext: 'Dima Davydiuk',
            img: './videosScreen/car.webp',
            title: 'ALEX SLOBOZHENKO | YOUTUBE | LAMBORGHINI REVUELTO RECORDING BY GD.FRAME',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: true,
            type: 'Type',
            typetext: 'Video production',
            director: 'Director',
            directortext: 'Dima Davydiuk',
            img: './videosScreen/plane.webp',
            title: 'ALEX SLOBOZHENKO | YOUTUBE | LAMBORGHINI REVUELTO RECORDING BY GD.FRAME',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: false,
            type: 'Type',
            typetext: 'Video production',
            img: './videosScreen/biznes.webp',
            title: 'ZLOY & MISTER BIZNES | YOUTUBE | RECORDING & EDIT BY GD.FRAME',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: false,
            type: 'Type',
            typetext: 'Video production',
            img: './videosScreen/kizaru.webp',
            title: 'ZLOY & KIZARU | YOUTUBE | RECORDING BY GD.FRAME',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: false,
            type: 'Type',
            typetext: 'Video production',
            img: './videosScreen/carLight.webp',
            title: 'PAVEL ANTONOV | RECORDING',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: false,
            type: 'Type',
            typetext: 'Video production',
            img: './videosScreen/man.webp',
            title: 'PAVEL ANTONOV | RECORDING',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
        },
        {
            big: false,
            type: 'Type',
            typetext: 'Video production',
            img: './videosScreen/joker.webp',
            title: 'JOKER KRASIVO PROJECT RECORDING & EDIT',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон'
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