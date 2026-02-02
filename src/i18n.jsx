import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ENG",
  fallbackLng: "ENG",
  interpolation: { escapeValue: false },
  resources: {
    ENG: {
      translation: {
        hero: {
          scroll: "Scroll down",
        },
        header: {
          photo: "Photo production",
          video: "Video production",
          about: "About us",
          clients: "Clients",
          contact: "Contact",
        },
        aboutUs: {
          title: "About us",
          leftTitle:
            "We work with businesses and brands that need more than “just nice” — they need visuals that are bold, precise, and built for results.",
          blue: "We create visuals that reflect your level.",
          desTop:
            "We handle the full production cycle — from concept to final frame — so you don’t waste time on control, revisions, and unnecessary back-and-forth.",
        },
        customers: {
          title: "Our customers",
        },
        contactUs: {
          title: "CONTACT US",
        },
        projects: {
          type: "Type",
          video: "Video production",
          director: "Director",
          directorNameF: "Dima Davydiuk",
          titleSloboj:
            "Bought a Lamborghini Revuelto! Race the Couriers! WHO’S FASTER? LOBOZHENKO",
          descriptionSloboj:
            "Filming a YouTube video for Alexander Slobozhenko; we shot with two camera operators and also used an FPV drone.",
          titleBiznes: "WHAT MR. BIZNES BOUGHT FOR $50,000 CHALLENGE",
          descriptionBisznes:
            'Turnkey filming and editing of a YouTube video for Artur Zloy, titled "How Does a Person Spend $50,000?" featuring Alexander "Mr. Business." Full production and dynamic visual shooting.',
          titleBarber: "Kizaru | Warsaw concert",
          descriptionBarber:
            "Filming and full post-production for Kizaru’s concert performance in Warsaw. Delivered a turnkey project — from footage to final edit.",
          titleKizaru: "KIZARU - What will you spend €50,000 on?",
          descriptionKizaru:
            'Filming a YouTube video for Artur Zloy, titled "How Does a Person Spend $50,000?" featuring artist and rapper Oleg Kizaru. Full on-location production, no editing.',
          titleMission: "Mission Impossible",
          descriptionMission: "Shooting an advertising concept for Pavel Antonov",
          TitlePavel: "PAVEL ANTONOV | RECORDING",
          descriptionPavel: "Shooting an advertising concept for Pavel Antonov",
          TitleJoker: "JOKER KRASIVO PROJECT RECORDING & EDIT",
          descriptionJoker:
            "Filming a commercial for the Krasivo Project beauty salon, inspired by the film Joker. We handled the organization and execution of the shoot, assembled the required crew, and delivered full post-production.",
        },
        footer: {
          wwd1: "Commercials",
          wwd2: "Shows",
          wwd3: "Podcasts / interviews",
          wwd4: "Event coverage",
          wwd5: "Travel",
          wwd6: "Sports content",
          wwd7: "Fashion shoots",
          wwd8: "Photo shoots",
          wwd9: "Designer object shoots",

          projectRequests: "Project requests",
          directMessages: "Direct messages",
          portfolioUpdates: "Portfolio and updates",
          leftText: "Full-cycle video production studio.",
          leftDescription:
            "Our strengths are visual quality, speed, and zero extra load on the client. We build a process that delivers a finished product without endless approvals, chaos, or micromanagement.",
          whatWeDo: "What we do",
          collaboration: "Collaboration",
          rightText: `We work with clients who:
- understand the value of visuals
- want to look stronger than their competitors
- trust the process and expect results

If you need a production team that doesn’t talk — it delivers — we’re ready to take your project turnkey.

Get in touch to discuss your task.`,
          policyContent: "Content is a tool for growth",
        },
      },
    },
    RU: {
      translation: {
        hero: {
          scroll: "Листай вниз",
        },
        header: {
          photo: "Фотопродакшн",
          video: "Выдеопродакшн",
          about: "Про нас",
          clients: "Клиенты",
          contact: "Контакти",
        },
        aboutUs: {
          title: "Про нас",
          leftTitle:
            "Мы работаем с бизнесом и брендами, которым важно не просто «красиво», а визуально сильно, точно и с результатом.",
          blue: "Создаем визуал который отражает уровень",
          desTop:
            "Берём на себя полный цикл продакшна от идеи до финального кадра, чтобы клиент не тратил время на контроль, правки и лишние обсуждения.",
        },
        customers: {
          title: "Наши клиенты",
        },
        contactUs: {
          title: "СВЯЗАТЬСЯ С НАМИ",
        },
        projects: {
          type: "Тип",
          video: "Видеопродакшн",
          director: "Режиссёр",
          directorNameF: "Дима Давыдюк",

          titleSloboj:
            "Купил Lamborghini Revuelto! Гонка курьеров! КТО БЫСТРЕЕ? ЛОБОЖЕНКО",
          descriptionSloboj:
            "Съёмка YouTube-видео для Александра Слобоженко; мы провели съёмку с двумя операторами камер, а также использовали FPV-дрон.",

          titleBiznes: "ЧТО МИСТЕР БИЗНЕС КУПИЛ НА $50 000 — ЧЕЛЛЕНДЖ",
          descriptionBisznes:
            "Съёмка и монтаж YouTube-видео под ключ для Артура Злого под названием «Как человек тратит $50 000?» с участием Александра «Мистер Бизнес». Полный продакшн и динамичная визуальная съёмка.",

          titleBarber: "Kizaru | концерт Варшава",
          descriptionBarber:
            "Съёмка и полный постпродакшн концертного выступления артиста Kizaru в Варшаве. Реализовали проект под ключ — от материала до финального монтажа.",

          titleKizaru: "KIZARU - На что потратит 50 000€?",
          descriptionKizaru:
            "Съёмка YouTube-видео для Артура Злого под названием «Как человек тратит $50 000?» с участием артиста и рэпера Олега Кизару. Полный продакшн на локации, без монтажа.",

          titleMission: "Миссия невыполнима",
          descriptionMission: "Съёмка рекламного креатива для Павла Антонова",

          TitlePavel: "ПАВЕЛ АНТОНОВ | СЪЁМКА",
          descriptionPavel: "Съёмка рекламного креатива для Павла Антонова",

          TitleJoker: "JOKER KRASIVO | СЪЁМКА И МОНТАЖ ПРОЕКТА",
          descriptionJoker:
            "Сьемка рекламного ролика для салона красоты Krasivo Project, по мотивам фильма Джокер. Забрали на себя организацию и проведение сьемки, поиск необходимой команды и постпродакшн",
        },
        footer: {
          wwd1: "Рекламные ролики",
          wwd2: "Шоу",
          wwd3: "Подкасты/интервью",
          wwd4: "Съемка мероприятий",
          wwd5: "Путешествия",
          wwd6: "Спортивный контент",
          wwd7: "Фэшн-съемки",
          wwd8: "Фотосессии",
          wwd9: "Сьемка дизайнерских объектов",

          projectRequests: "Запросы проектов",
          directMessages: "Прямые сообщения",
          portfolioUpdates: "Портфолио и обновления",
          leftText: "Студия видеопродакшн полного цикла.",
          leftDescription:
            "Наша сильная сторона — визуальный уровень, скорость и отсутствие лишней нагрузки на клиента. Мы выстраиваем процесс так, чтобы вы получили готовый продукт без бесконечных согласований, хаоса и микроменеджмента.",
          whatWeDo: "Что мы делаем",
          collaboration: "Сотрудничество",
          rightText: ` Мы работаем с клиентами, которые:
            - понимают ценность визуала
            - хотят выглядеть сильнее конкурентов 
            - доверяют процесс нам и ждут результат

            Если вам нужен продакшн, который не болтает, а делает — мы готовы взять проект под ключ.
            
            Свяжитесь с нами, чтобы обсудить задачу.
            `,
          policyContent: "Контент — инструмент роста",
        },
      },
    },
  },
});

export default i18n;
