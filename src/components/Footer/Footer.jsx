import Title from '../../UI/Title/Title';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation();

    const list = [
        t('footer.musicVideos'),
        t('footer.youtubeShows'),
        t('footer.commercials'),
        t('footer.fashionCampaigns'),
        t('footer.eventCoverage'),
        t('footer.photoProduction')
    ];

    const contact = [
        {
            title: t('footer.projectRequests'),
            src: 'hello@gdframe.studio',
            href: 'mailto:hello@gdframe.studio'
        },
        {
            title: t('footer.directMessages'),
            src: '@Telegram'
        },
        {
            title: t('footer.portfolioUpdates'),
            src: '@Instagram'
        }
    ];

    return (
        <div className='Footer fcc contact'>
            <div className='Footer_container container fcc'>
                <div className='Footer_top'>
                    <div className='Footer_top_left'>
                        <Title title={'GD FRAME'} small />
                        <div className='Footer_top_left_text'>
                            {t('footer.leftText')}
                        </div>
                        <div className='Footer_top_left_description'>
                            {t('footer.leftDescription')}
                        </div>
                    </div>
                    <div className='Footer_top_middle'>
                        <Title title={t('footer.whatWeDo')} small />
                        <div className='Footer_top_middle_list'>
                            {list.map((el, index) => (
                                <div className='Footer_top_middle_list_el' key={`Footer_top_middle_list_el_${index}`}>{el}</div>
                            ))}
                        </div>
                    </div>
                    <div className='Footer_top_right'>
                        <Title title={t('footer.collaboration')} small />
                        <div className='Footer_top_right_text'>
                            {t('footer.rightText')}
                        </div>
                        <div className='Footer_top_right_contact'>
                            {contact.map((el, index) => (
                                <div className='Footer_top_right_contact_el' key={`Footer_top_right_contact_el_${index}`}>
                                    <div className='Footer_top_right_contact_el_top'>{el.title}</div>
                                    {el.href ? (
                                        <a href={el.href} className='Footer_top_right_contact_el_bottom'>
                                            {el.src}
                                        </a>
                                    ) : (
                                        <div className='Footer_top_right_contact_el_bottom'>{el.src}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='Footer_policy fcc'>
                    <div className='Footer_policy_policy'>
                        © GD FRAME
                    </div>
                    <div className='Footer_policy_content'>
                        {t('footer.policyContent')}
                    </div>
                </div>
                <div className='Footer_decor free_img'>
                    <img src="./footerDecor.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
