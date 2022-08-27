import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            Sidebar: {
                "Home": "Home",
                "About": "About",
                "Services": "Services",
                "Portfolio": "Portfolio",
                "Contact": "Contact",
            },
            Home: {
                "Hello, my name is": "Hello, my name is ",
                "Name": "Pavel Mikhailov",
                "I’m a": "I’m a ",
                "Web Developer": "Web Developer",
                "About": "I'm a web Developer with experience for over 3 years. My experience is creating websites, tests, setting up Docker containers, pipelines and more...",
                "More About Me" : "More About Me"
            },
            About : {
                "About Me": "About Me",
                "I’m Pavel Mikhailov and": "I’m Pavel Mikhailov and ",
                "Web Developer": "Web Developer",
                "Text": "I'm a web Developer with experience for over 3 years. My experience is in creating and maintaining websites.",
                "Birthday": "Birthday",
                "Email": "Email",
                "Age": "Age",
                "Phone": "Phone",
                "City": "City",
                "More About Me" : "More About Me",
                Education: {
                    "Education": "Education",
                    "Title1": "Omsk Industrial and Economic College",
                    "Text1": "I studied at the Faculty of Applied Computer Science",
                    "Title2": "Omsk State Technical University",
                    "Text2": "I studied at the Faculty of Information Technology and Computer Systems",
                },
                Experience: {
                    "Experience": "Experience",
                    "Title1": "3rd category Software Engineer",
                    "Text1": "Web and desktop solutions: Electron JS desktop applications; websites using react and typescript; parser scripts; Figma layouts; setting up docker containers; ci/cd setup; creating tests with cypress",
                }
            },
            Services: {
                "Services": "Services",
                "Adaptive Layout": "Adaptive Layout",
                "Linux": "Linux",
                "Code Style": "Code Style",
                "Search for info": "Search for info",
                "Communication": "Communication",
                "Text1": "I know how to make adaptive interfaces",
                "Text2": "I work on Linux",
                "Text3": "I work with sass/scss preprocessors",
                "Text4": "I\'m styling my code",
                "Text5": "I know how to search information",
                "Text6": "I am sociable",
            },
            Portfolio: {
                "Portfolio": "Portfolio",
                "My Last Projects": "My Last Projects",
            },
            ContactMe: {
                "Contact Me": "Contact Me",
                "Phone": "Phone",
                "Office": "Office",
                "Email": "Email",
                "Website": "Website",
                "Questions": 'Have You Any Questions?',
                "Send Me": 'SEND ME AN EMAIL',
                "Response" : 'I\'M VERY RESPONSIVE TO MESSAGE',
                "Send Message": 'Send Message'
            }
        }
    },
    ru: {
        translation: {
            Sidebar: {
                "Home": "Главная",
                "About": "Обо мне",
                "Services": "Услуги",
                "Portfolio": "Портфолио",
                "Contact": "Связь",
            },
            Home: {
                "Hello, my name is": "Привет, меня зовут ",
                "Name": "Павел Михайлов",
                "I’m a": "Я ",
                "Web Developer": "Веб-Разработчик",
                "About": "Я веб-разработчик с опытом работы более 3 лет. Мой опыт заключается в создании веб-сайтов, тестировании, настройке Docker контейнеров, CI/CD и многого другого...",
                "More About Me" : "Больше обо Мне"
            },
            About : {
                "About Me": "Обо мне",
                "I’m Pavel Mikhailov and": "Я Павел Михайлов, ",
                "Web Developer": "Веб разработчик",
                "Text": "Я веб-разработчик с опытом работы более 3 лет. Мой опыт заключается в создании и обслуживании веб-сайтов.",
                "Birthday": "День рождения",
                "Email": "Почта",
                "Age": "Возраст",
                "Phone": "Телефон",
                "City": "Город",
                "More About Me" : "Больше обо Мне",
                Education: {
                    "Education": "Образование",
                    "Title1": "Омский промышленно-экономический колледж",
                    "Text1": "Я учился на факультете прикладной информатики",
                    "Title2": "Омский государственный технический университет",
                    "Text2": "Я учился на факультете информационных технологий и компьютерных систем",
                },
                Experience: {
                    "Experience": "Опыт",
                    "Title1": "Инженер-программист 3 категории",
                    "Text1": "Веб и десктопные решения: Компьютерные приложения на Electron JS; веб-сайты с использованием react и typescript; скрипты парсеры; макеты в Figma; настройка контейнеров docker; настройка ci/cd; создание тестов с помощью cypress",
                }
            },
            Services: {
                "Services": "Навыки",
                "Adaptive Layout": "Адаптивная вёрстка",
                "Linux": "Linux",
                "Code Style": "Код стайл",
                "Search for info": "Поиск информации",
                "Communication": "Коммуникабельность",
                "Text1": "Я знаю, как создавать адаптивные интерфейсы",
                "Text2": "Я работаю на Linux",
                "Text3": "Я работаю с препроцессорами sass/scss",
                "Text4": "Я предаю стиль моему коду",
                "Text5": "Я знаю, как искать информацию",
                "Text6": "Я коммуникабельный",
            },
            Portfolio: {
                "Portfolio": "Портфолио",
                "My Last Projects": "Мои последние проекты",
            },
            ContactMe: {
                "Contact Me": "Связаться со мной",
                "Phone": "Телефон",
                "Office": "Офис",
                "Email": "Почта",
                "Website": "Сайт",
                "Questions": 'У Вас Есть Какие-Нибудь Вопросы?',
                "Send Me": 'ПРИШЛИТЕ МНЕ ЭЛЕКТРОННОЕ ПИСЬМО',
                "Response" : 'Я ОЧЕНЬ БЫСТРО ОТВЕЧАЮ НА СООБЩЕНИЯ',
                "Send Message": 'Отправить сообщение'
            }
        }
    }
};
export const i18next = (lang) => {
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources,
            lng: lang, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
            // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
            // if you're using a language detector, do not define the lng option

            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });
}