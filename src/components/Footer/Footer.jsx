import Title from '../../UI/Title/Title';
import './Footer.scss';
export default () => {

    const list = ['Music videos', 'YouTube shows', 'Commercials and brand films', 'Fashion and lifestyle campaigns', 'Event coverage', 'Photo production']

    const contact = [
        {
            title: 'Project requests',
            src: 'hello@gdframe.studio',
            href: 'mailto:hello@gdframe.studio'
        },
        {
            title: 'Direct messages',
            src: '@Telegram'
        },
        {
            title: 'Portfolio and updates',
            src: '@Instagram'
        }
    ]

    return (
        <div className='Footer fcc'>
            <div className='Footer_container container fcc'>
                <div className='Footer_top'>
                    <div className='Footer_top_left'>
                        <Title title={'GD FRAME'} small/>
                        <div className='Footer_top_left_text'>
                            Full cycle video production studio.
                        </div>
                        <div className='Footer_top_left_description'>
                            We craft cinematic visuals that help brands, artists, and creators stand out. From first idea, casting, and location scouting - to shooting, editing, and delivery of ready to publish content.
                        </div>
                    </div>
                    <div className='Footer_top_middle'>
                        <Title title={'What we do'} small/>
                        <div className='Footer_top_middle_list'>
                            {
                                list.map((el, index) => (
                                    <div className='Footer_top_middle_list_el' key={`Footer_top_middle_list_el_${index}`}>{el}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='Footer_top_right'>
                        <Title title={'Collaboration'} small/>
                        <div className='Footer_top_right_text'>
                            We craft cinematic visuals that help brands, artists, and creators stand out. From first idea, casting, and location scouting - to shooting, editing, and delivery of ready to publish content.
                        </div>
                        <div className='Footer_top_right_contact'>
                            {
                                contact.map((el, index) => (
                                    <div className='Footer_top_right_contact_el' key={`Footer_top_right_contact_el_${index}`}>
                                        <div className='Footer_top_right_contact_el_top'>{el.title}</div>
                                        <a href={el.href} className='Footer_top_right_contact_el_bottom'>
                                            {el.src}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='Footer_policy fcc'>
                    <div className='Footer_policy_policy'>
                        © GD FRAME
                    </div>
                    <div className='Footer_policy_content'>
                        Content is an instrument of growth
                    </div>
                </div>
                <div className='Footer_decor free_img'>
                    <img src="./footerDecor.webp" alt="" />
                </div>
            </div>
        </div>
    )
}