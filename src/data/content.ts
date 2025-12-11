export const EVENT_TIMESTAMP = new Date("2025-12-25T17:00:00+03:00").getTime();
export const EVENT_DATE_TEXT = "25 декабря 2025 · 17:00";

const asset = (name: string) => `/assets/${name}`;

export const galleryItems = [
  {
    label: "",
    path: asset("icy-blue.jpg"),
    fallback: "linear-gradient(145deg, #b9d8ed, #4c6b82)",
  },
  {
    label: "",
    path: asset("eve-2026.jpg"),
    fallback: "linear-gradient(145deg, #5b0c18, #210712)",
  },
  {
    label: "",
    path: asset("candle-silver.jpg"),
    fallback: "linear-gradient(145deg, #1f2d3c, #6b7b8c)",
  },
];

export const schedule = [
  {
    time: "17:30",
    header: "Регистрация",
    desc: "Спускаемся на первый этаж бизнес-центра в ресторан Lambic Collection, где гостей встретят welcome-drinks и холодные закуски.",
  },
  {
    time: "18:00",
    header: "Официальная часть",
    desc: "Подводим итоги года, благодарим коллег и  делимся планами на 2026.",
  },
  {
    time: "19:00",
    header: "Живое выступление",
    desc: "Начало программы кавер-группы Trigger.",
  },
  {
    time: "21:30",
    header: "Торт и DJ-сет",
    desc: "Подача торта, после чего вечер плавно продолжится DJ-сетами и неформальным общением. Окончание  вечера в 23:00.",
  },
];

export const venueBullets = [
  "Сеты бельгийского пива и европейская кухня — удобно для дегустации.",
  "Интерьер в тёплых тонах с мягким светом; комфортно проводить вечер.",
  "Удобное расположение рядом с 2-й Звенигородской и быстрый доступ к метро.",
];
