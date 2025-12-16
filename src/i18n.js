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
          hero: {
            scroll: 'Scroll down',
          },
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
            desTop: 'GD Frame is a studio that helps brands communicate through image.',
            desBot: 'We shoot commercials, YouTube videos, podcasts, and photos that last.'
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
            titleSloboj: 'Bought a Lamborghini Revuelto! Race the Couriers! WHOS FASTER? LOBOZHENKO',
            descriptionSloboj: 'Filming a YouTube video for Alexander Slobozhenko; we completed the shoot with two camera operators and also used an FPV drone.',
            titleBiznes: 'WHAT MR. BIZNES BOUGHT FOR $50,000 CHALLENGE',
            descriptionBisznes: 'Filming and editing a turnkey YouTube video for Artur Zloy, titled "How Does a Person Spend $50,000?" featuring Alexander "Mr. Business." Full production and dynamic visual filming.',
            titleBarber: 'Kizaru | Warsaw concert',
            descriptionBarber: 'Filming and full post-production for Kizaru concert performance in Warsaw. We implemented a turnkey project, from footage to final editing.',
            titleKizaru: 'KIZARU - What will you spend €50,000 on?',
            descriptionKizaru: 'Filming a YouTube video for Artur Zloy, titled "How Does a Person Spend $50,000?" featuring artist and rapper Oleg Kizaru. Full production on location, no editing.',
            titleMission: 'Mission Impossible',
            descriptionMission: 'Shooting advertising creative for Pavel Antonov',
            TitlePavel: 'PAVEL ANTONOV | RECORDING',
            descriptionPavel: 'Shooting advertising creative for Pavel Antonov',
            TitleJoker: 'JOKER KRASIVO PROJECT RECORDING & EDIT',
            descriptionJoker: 'Filming a commercial for the Krasivo Project beauty salon, based on the film Joker. We handled the organization and execution of the shoot, recruiting the necessary crew, and post-production.',
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
          hero: {
            scroll: 'Листай вниз',
          },
          header: {
            photo: 'Фотопродакшн',
            video: 'Выдеопродакшн',
            about: 'Про нас',
            clients: 'Клиенты',
            contact: 'Контакти'
          },
          aboutUs: {
            title: 'Про нас',
            leftTitle: 'Мы создаём визуальные образы, которые вызывают эмоции.',
            blue: 'Просто. Чисто. Точно.',
            desTop: 'GD Frame — студия, которая помогает брендам говорить через образ.',
            desBot: 'Мы снимаем рекламу, YouTube, подкасты и фото, которые остаются в памяти.'
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
            director: 'Режиссёр',
            directorNameF: 'Дима Давыдюк',

            titleSloboj: 'Купил Lamborghini Revuelto! Гонка курьеров! КТО БЫСТРЕЕ? ЛОБОЖЕНКО',
            descriptionSloboj: 'Съёмка YouTube-видео для Александра Слобоженко; мы провели съёмку с двумя операторами камер, а также использовали FPV-дрон.',

            titleBiznes: 'ЧТО МИСТЕР БИЗНЕС КУПИЛ НА $50 000 — ЧЕЛЛЕНДЖ',
            descriptionBisznes: 'Съёмка и монтаж YouTube-видео под ключ для Артура Злого под названием «Как человек тратит $50 000?» с участием Александра «Мистер Бизнес». Полный продакшн и динамичная визуальная съёмка.',

            titleBarber: 'Kizaru | концерт Варшава',
            descriptionBarber: 'Съёмка и полный постпродакшн концертного выступления артиста Kizaru в Варшаве. Реализовали проект под ключ — от материала до финального монтажа.',

            titleKizaru: 'KIZARU - На что потратит 50 000€?',
            descriptionKizaru: 'Съёмка YouTube-видео для Артура Злого под названием «Как человек тратит $50 000?» с участием артиста и рэпера Олега Кизару. Полный продакшн на локации, без монтажа.',

            titleMission: 'Миссия невыполнима',
            descriptionMission: 'Съёмка рекламного креатива для Павла Антонова',

            TitlePavel: 'ПАВЕЛ АНТОНОВ | СЪЁМКА',
            descriptionPavel: 'Съёмка рекламного креатива для Павла Антонова',

            TitleJoker: 'JOKER KRASIVO | СЪЁМКА И МОНТАЖ ПРОЕКТА',
            descriptionJoker: 'Сьемка рекламного ролика для салона красоты Krasivo Project, по мотивам фильма Джокер. Забрали на себя организацию и проведение сьемки, поиск необходимой команды и постпродакшн'
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
