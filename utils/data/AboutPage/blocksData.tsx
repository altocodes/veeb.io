// styles
import styles from "@/components/AboutPage/InfoBlocks/InfoBlocks.module.scss";
// mock img
import MockImg from "@/assets/images/about-mock-img.jpg";
// icons
import { ExcelIcon } from "@/assets/icons/excel";
import { LogoIcon } from "@/assets/icons/logo";

const pictureBlock1 = () => {
  return (
    <div className={`${styles.picture} ${styles.pic1}`}>
      <span>Социальные сети</span>
      <span>База юр.лиц</span>
      <span>Сайт компании</span>
      <LogoIcon />
      <span>Отзывы</span>
      <span>Реклама</span>
      <span>Job-сайты</span>
    </div>
  );
};

const pictureBlock2 = () => {
  return (
    <div className={`${styles.picture} ${styles.pic2}`}>
      <img src={MockImg.src} alt="img" />
      <ExcelIcon />
    </div>
  );
};

const pictureBlock3 = () => {
  return (
    <div className={`${styles.picture} ${styles.pic3}`}>
      <span>Здравствуйте! А у вас сайт давно не обновлялся! :)</span>
      <button>Копировать</button>
    </div>
  );
};

export const blocksData = [
  {
    id: 1,
    title: "30+ источников данных",
    text: "Собирайте все открытые данные по вашим потенциальным клиентам в 1 клик. Находите контакт тех, кто принимает решение. Используйте инсайды о компании, чтобы холодный контакт превратился в теплый.",
    picture: pictureBlock1,
  },
  {
    id: 2,
    title: "Экспорт в Excel",
    text: "Добавляйте найденные данные по разным компаниями в единый список. Экспортируйте данные в Exsel.",
    link: "Как экспортировать список компаний",
    url: "/list",
    picture: pictureBlock2,
  },
  {
    id: 3,
    title: "Пишите быстро",
    text: "Создавайте свои шаблоны сообщений, которые экономят время продавцов и повышают конверсию.",
    picture: pictureBlock3,
  },
];
