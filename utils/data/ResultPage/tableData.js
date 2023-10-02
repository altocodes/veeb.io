export const contactsColsTableData = [
  { id: 1, title: "Вид контакта" },
  { id: 2, title: "Для экспорта" },
  { id: 3, title: "Источник" },
  { id: 4, title: "Действие" },
];

export const contactsRowTableData = [
  {
    id: 1,
    title: "Телефон общий",
    data: [
      { id: 1, type: "text", value: "+7 499 800-81-85", included: true },
      { id: 2, type: "text", value: "+7 499 800-81-85", included: true },
    ],
    source: [
      { id: 1, type: "text", value: "Общий с сайта" },
      { id: 2, type: "text", value: "Из данных о юр.лице" },
    ],
    actions: [
      {
        id: 1,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "more", value: "Еще" },
        ],
      },
      {
        id: 2,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "more", value: "Еще" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Телефон мобильный",
    data: [
      { id: 1, type: "text", value: "+7 499 800-81-85", included: true },
      { id: 2, type: "text", value: "+7 499 800-81-85", included: true },
    ],
    source: [
      { id: 1, type: "text", value: "Футер сайта" },
      { id: 2, type: "url", value: "http://site.ru/page" },
    ],
    actions: [
      {
        id: 1,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "whatsapp", value: "WhatsApp" },
          { id: 3, type: "telegram", value: "Telegram" },
          { id: 4, type: "sms", value: "SMS" },
          { id: 5, type: "more", value: "Еще" },
        ],
      },
      {
        id: 2,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "sms", value: "SMS" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "E-mail",
    data: [
      { id: 1, type: "url", value: "info@site.ru", included: false },
      { id: 2, type: "url", value: "melnikov@mail.ru", included: false },
      { id: 3, type: "url", value: "hr@site.ru", included: false },
    ],
    source: [
      { id: 1, type: "text", value: "Футер сайта" },
      { id: 2, type: "url", value: "http://site.ru/page" },
      {
        id: 3,
        type: "text",
        value:
          // "Из данных о юридическом лице на сайте <a href='#'>http://site.ru/page</a>",
          "Из данных о юридическом лице на сайте http://site.ru/page",
      },
    ],
    actions: [
      {
        id: 1,
        buttons: [
          { id: 1, type: "message", value: "Написать" },
          { id: 2, type: "more", value: "Еще" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Социальные сети",
    data: [
      { id: 1, type: "url", value: "vk.com/uralhim", included: false },
      { id: 2, type: "url", value: "facebook.com/uralhim", included: false },
      { id: 3, type: "url", value: "instagram.com/uralhim", included: false },
    ],
    source: [
      { id: 1, type: "text", value: "Из Yandex" },
      { id: 2, type: "text", value: "Из Yandex" },
      { id: 3, type: "text", value: "Футер сайта" },
    ],
    actions: [{ id: 1, buttons: [] }],
  },
];

export const peopleColsTableData = [
  { id: 1, title: "Имя и должность" },
  { id: 2, title: "Для экспорта" },
  { id: 3, title: "Источник" },
  { id: 4, title: "Действие" },
];

export const peopleRowTableData = [
  {
    id: 1,
    title: "Игорь Иванов СТО",
    data: [
      { id: 1, type: "text", value: "+7 499 800-81-85", included: true },
      { id: 2, type: "url", value: "melnikov@mail.ru", included: true },
      { id: 3, type: "url", value: "@ivanov", included: true },
      {
        id: 4,
        type: "img",
        value:
          "https://s3-alpha-sig.figma.com/img/6059/976d/60309d18d0532896740428008048861c?Expires=1694995200&Signature=EeqKSBdryWyv5cNk~x5i7NlmRQde2IpX4-sAJqsQqDnJGBKEWeqQATUmVa9AKRmaxKwzSEO53KtWrRkssT7kjp77-Ykw4~AMOsKvVhTk9GAwsWnuBgBYwfewzWwF2sNoZQMi94r9pNUmP~QY4lzwnB1EiR577jqCSUgXcB-vMjgpRytyGL9K4zu9KJ4i1Y2ef-5JgnL0rvs422JeqLCqOYz76LccP3xrJRfa0BejsIvoDHtBT3VERdA0Cfos4QGgm7r1WjXGd1UzBqJuC4vq8hlcGIm1ArR-IC2XsBbEfLc3YteMZdoDiN-SfEe7td5CynKc4bQHSD5e73QSoiGhOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        included: true,
      },
    ],
    source: [
      { id: 1, type: "text", value: "Сайт компании" },
      { id: 2, type: "text", value: "Из Google" },
      { id: 3, type: "text", value: "Telegram" },
      { id: 4, type: "url", value: "http://site.ru/page" },
    ],
    actions: [
      {
        id: 1,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "sms", value: "SMS" },
        ],
      },
      {
        id: 2,
        buttons: [
          { id: 1, type: "message", value: "Написать" },
          { id: 2, type: "more", value: "Еще" },
        ],
      },
      {
        id: 3,
        buttons: [{ id: 1, type: "message", value: "Написать" }],
      },
      {
        id: 4,
        buttons: [{ id: 1, type: "search", value: "Искать по фото" }],
      },
    ],
  },
  {
    id: 2,
    title: "Петр Огурцов Менеджер",
    data: [
      { id: 1, type: "text", value: "+7 499 800-81-85", included: true },
      { id: 2, type: "url", value: "ivanov@uralchim.ru", included: true },
      { id: 3, type: "url", value: "@ivanov", included: true },
    ],
    source: [
      { id: 1, type: "text", value: "Сайт компании" },
      { id: 2, type: "text", value: "Из Google" },
      { id: 3, type: "text", value: "Telegram" },
    ],
    actions: [
      {
        id: 1,
        buttons: [
          { id: 1, type: "phone-call", value: "Позвонить" },
          { id: 2, type: "sms", value: "SMS" },
        ],
      },
      {
        id: 2,
        buttons: [
          { id: 1, type: "message", value: "Написать" },
          { id: 2, type: "more", value: "Еще" },
        ],
      },
      {
        id: 3,
        buttons: [{ id: 1, type: "message", value: "Написать" }],
      },
    ],
  },
];
