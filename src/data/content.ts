export const EVENT_TIMESTAMP = new Date("2025-12-25T17:00:00+03:00").getTime();
export const EVENT_DATE_TEXT = "25 декабря 2025 · 17:00";

const asset = (name: string) => `assets/${name}`;

export const galleryItems = [
  {
    label: "",
    path: asset("icy-blue.jpg"),
    fallback: "linear-gradient(145deg, #b9d8ed, #4c6b82)",
  },
  {
    label: "",
    path: asset("gosti.png"),
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
    time: "17:00 — Сбор",
    desc: "Встречаемся",
  },
  {
    time: "18:00 — Итоги года",
    desc: "Благодарим коллег и делимся планами на 2026.",
  },
  {
    time: "19:00 — Ужин и общение",
    desc: "Сеты блюд, дегустация напитков, живое общение.",
  },
  {
    time: "21:00 — Музыка и фото",
    desc: "Плейлист с новогодним настроением, совместные фото и лёгкий танцпол.",
  },
];

export const venueBullets = [
  "Сеты бельгийского пива и европейская кухня — удобно для дегустации.",
  "Интерьер в тёплых тонах с мягким светом; комфортно проводить вечер.",
  "Удобное расположение рядом с 2-й Звенигородской и быстрый доступ к метро.",
];
