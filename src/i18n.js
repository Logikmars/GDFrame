import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ENG',
    fallbackLng: 'ENG',
    interpolation: {
      escapeValue: false
    },
    resources: {
      ENG: {
        translation: {
          header: {
            photo: 'Photo production',
            video: 'Video production',
            about: 'About us',
            clients: 'Clients',
            contact: 'Contact'
          },
          aboutUs: {
            title: 'About us',
            leftTitle: 'We create visuals that feel.',
            blue: 'Simple. Clean. Precise.',
            desTop: 'GD Frame — студия, которая помогает брендам говорить через образ.',
            desBot: 'Мы снимаем рекламу, YouTube, подкасты и фото, которые остаются в памяти.'
          },
          customers: {
            title: 'Our customers'
          },
          contactUs: {
            title: 'CONTACT US'
          },
          projects: {
            type: 'Type',
            video: 'Video production',
            director: 'Director',
            directorNameF: 'Dima Davydiuk',
            title: 'ALEX SLOBOZHENKO | YOUTUBE | LAMBORGHINI REVUELTO RECORDING BY GD.FRAME',
            description: 'Filming a YouTube video for Alexander Slobozhenko; we completed the shoot with two camera operators and also used an FPV drone.',
            descriprionBiznes: 'ZLOY & MISTER BIZNES | YOUTUBE | RECORDING & EDIT BY GD.FRAME',
            descriprionKizaru: 'ZLOY & KIZARU | YOUTUBE | RECORDING BY GD.FRAME',
            descriprionPavel: 'PAVEL ANTONOV | RECORDING',
            descriprionJoker: 'JOKER KRASIVO PROJECT RECORDING & EDIT'
          },
          footer: {
            musicVideos: 'Music videos',
            youtubeShows: 'YouTube shows',
            commercials: 'Commercials and brand films',
            fashionCampaigns: 'Fashion and lifestyle campaigns',
            eventCoverage: 'Event coverage',
            photoProduction: 'Photo production',
            projectRequests: 'Project requests',
            directMessages: 'Direct messages',
            portfolioUpdates: 'Portfolio and updates',
            leftText: 'Full cycle video production studio.',
            leftDescription: 'We craft cinematic visuals that help brands, artists, and creators stand out. From first idea, casting, and location scouting - to shooting, editing, and delivery of ready to publish content.',
            whatWeDo: 'What we do',
            collaboration: 'Collaboration',
            rightText: 'We craft cinematic visuals that help brands, artists, and creators stand out. From first idea, casting, and location scouting - to shooting, editing, and delivery of ready to publish content.',
            policyContent: 'Content is an instrument of growth'
          }
        }
      },
      RU: {
        translation: {
          header: {
            photo: 'Фотопродакшн',
            video: 'Відеопродакшн',
            about: 'Про нас',
            clients: 'Клієнти',
            contact: 'Контакти'
          },
          aboutUs: {
            title: 'Про нас'
          },
          customers: {
            title: 'Наши клиенты'
          },
          contactUs: {
            title: 'СВЯЗАТЬСЯ С НАМИ'
          },
          projects: {
            type: 'Тип',
            video: 'Видеопродакшн',
            director: 'Директор',
            directorNameF: 'Дима Давидук',
            title: 'ALEX SLOBOZHENKO | YOUTUBE | СЪЁМКА LAMBORGHINI REVUELTO ОТ GD.FRAME',
            description: 'Съёмка YouTube ролика для Александра Слобоженко, закрыли сьемку с 2 операторами + задействовали FPV дрон',
            descriprionBiznes: 'ZLOY & MISTER BIZNES | YOUTUBE | СЪЁМКА & EDIT ОТ GD.FRAME',
            descriprionKizaru: 'ZLOY & KIZARU | YOUTUBE | СЪЁМКА ОТ GD.FRAME',
            descriprionPavel: 'PAVEL ANTONOV | СЪЁМКА',
            descriprionJoker: 'JOKER KRASIVO PROJECT СЪЁМКА & EDIT'
          },
          footer: {
            musicVideos: 'Музыкальные видео',
            youtubeShows: 'YouTube шоу',
            commercials: 'Коммерческие и брендовые фильмы',
            fashionCampaigns: 'Кампании по моде и lifestyle',
            eventCoverage: 'Съёмка мероприятий',
            photoProduction: 'Фотопродакшн',
            projectRequests: 'Запросы проектов',
            directMessages: 'Прямые сообщения',
            portfolioUpdates: 'Портфолио и обновления',
            leftText: 'Студия видеопродакшн полного цикла.',
            leftDescription: 'Мы создаём кинематографические визуалы, которые помогают брендам, артистам и креаторам выделяться. От идеи, кастинга и поиска локаций до съёмки, монтажа и готового к публикации контента.',
            whatWeDo: 'Что мы делаем',
            collaboration: 'Сотрудничество',
            rightText: 'Мы создаём кинематографические визуалы, которые помогают брендам, артистам и креаторам выделяться. От идеи, кастинга и поиска локаций до съёмки, монтажа и готового к публикации контента.',
            policyContent: 'Контент — инструмент роста'
          }
        }
      }
    }
  });

export default i18n;
