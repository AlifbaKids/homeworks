// ============================================================
//  ДАННЫЕ ДЛЯ АРАБСКОГО АЛФАВИТА
//
//  Поле `slides` — содержимое карусели для каждой буквы.
//  Слайды показываются по порядку. Добавляйте любое количество
//  слайдов любых типов в любом порядке.
//
//  ── ТИПЫ СЛАЙДОВ ──────────────────────────────────────────
//
//  КАРТИНКА  (одна или несколько, + опциональные аудио и текст):
//
//  Одна картинка (простой вариант):
//  { type: "image",
//    title:   "Заголовок",
//    src:     "images/alif.jpg",
//    caption: "Курсивная подпись",
//    audio:   "audio/alif.mp3",   // плеер под картинкой (опционально)
//    text:    "Текст под слайдом"
//  }
//
//  Несколько картинок — галерея (нажать → лайтбокс):
//  { type: "image",
//    title:   "Заголовок",
//    images: [
//      { src: "images/alif_1.jpg", caption: "Подпись 1" },
//      { src: "images/alif_2.jpg", caption: "Подпись 2" },
//      { src: "images/alif_3.jpg", caption: "Подпись 3" }
//    ],
//    audio: "audio/alif.mp3",     // плеер под галереей (опционально)
//    text:  "Текст под галереей"
//  }
//  Количество картинок определяет раскладку:
//    1 → полная ширина   2 → две колонки
//    3 → три колонки     4 → 2×2   5+ → авто-сетка
//
//  АУДИО  (+ опциональный текст под плеером):
//  { type: "audio",
//    title:   "Заголовок",
//    src:     "audio/alif.mp3",
//    caption: "Курсивная подпись",
//    text:    "Текст под аудио"
//  }
//
//  ВИДЕО (YouTube или локальный файл, + текст под видео):
//  { type: "video",
//    title:   "Заголовок",
//    youtube: "dQw4w9WgXcQ",       // ID из youtube.com/watch?v=...
//    // src: "videos/alif.mp4",    // ИЛИ локальный файл
//    caption: "Курсивная подпись",
//    text:    "Текст под видео"
//  }
//
//  ТЕСТ — один правильный ответ:
//  { type: "quiz",
//    question: "Вопрос?",
//    emoji:    "🤔",
//    options:  ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
//    answer:   0    // индекс единственного правильного ответа
//  }
//
//  ТЕСТ — несколько правильных ответов:
//  { type: "quiz-multi",
//    question: "Выбери все правильные ответы:",
//    emoji:    "✅",
//    options:  ["А", "Б", "В", "Г"],
//    answers:  [0, 2]   // МАССИВ индексов всех правильных вариантов
//  }
//
//  СКАЧАТЬ ФАЙЛ:
//  { type: "download",
//    title:       "Рабочий лист",
//    description: "Распечатай и обведи букву!",
//    icon:        "📄",            // любой эмодзи
//    src:         "files/alif_worksheet.pdf",
//    filename:    "alif_worksheet.pdf",
//    fileType:    "PDF",
//    text:        "Дополнительный текст под кнопкой"
//  }
//
//  ТЕКСТ (только текст, без медиа):
//  { type: "text",
//    emoji: "📖",                  // эмодзи-иконка вверху (опционально)
//    title: "Заголовок",           // опционально
//    body:  "Основной текст.\nМожно несколько строк.\n\nИ абзацев.",
//    align: "left",                // "left" | "center" | "right"  (по умолчанию left)
//    size:  "normal"               // "small" | "normal" | "large" | "xlarge"
//  }
//  Внутри body поддерживается простое форматирование:
//    **жирный текст**                →  выделяется жирным
//    *цветной текст*                 →  выделяется цветом буквы
//    [текст ссылки](https://url)     →  кликабельная ссылка (открывается в новой вкладке)
// ============================================================

const ARABIC_LETTERS = [
  {
    id: 1,
    letter: "ا",
    name: "Алиф",
    nameAr: "أَلِف",
    sound: "А",
    color: "#FF6B6B",
    colorLight: "#FFE5E5",
    emoji: "🍎",
    // description: "Первая буква! Похожа на прямую палочку.",
    forms: { isolated: "ا", final: "ـا", medial: "ـا",  initial: "ا"},
    slides: [
      {
        // ── Одна картинка с аудио и текстом ──
        type: "image",
        title: "Буква Алиф — ا",
        src: "", // например: "images/alif.jpg"
        caption: "Алиф — первая буква арабского алфавита",
        audio: "", // например: "audio/alif_name.mp3"
        text: "Алиф похожа на прямую вертикальную палочку.\nОна стоит первой в алфавите и обозначает звук «А».",
      },
      {
        // ── Несколько картинок — галерея (нажать → лайтбокс) ──
        type: "image",
        title: "Как пишется Алиф",
        images: [
          { src: "", caption: "Изолированная форма: ا" },
          { src: "", caption: "В начале слова: اـ" },
          { src: "", caption: "В середине слова: ـاـ" },
          { src: "", caption: "В конце слова: ـا" },
        ],
        // audio: "audio/alif_writing.mp3",  // можно добавить аудио под галереей
        text: "Нажми на любую картинку, чтобы увеличить её.",
      },
      {
        // ── Аудио с текстом и подписью ──
        type: "audio",
        title: "Слушай, как звучит Алиф!",
        src: "", // например: "audio/alif.mp3"
        caption: "Нажми ▶ и повтори вслух",
        text: "Произноси громко и чётко: «А»!\nПовтори три раза.",
      },
      {
        // ── Видео с текстом под ним ──
        type: "video",
        title: "Смотри — буква Алиф!",
        youtube: "", // ID из youtube.com/watch?v=ВОТ_ЭТО
        src: "", // или локальный файл: "videos/alif.mp4"
        caption: "Обучающее видео",
        text: "Посмотри, как пишется буква Алиф.\nПовтори движения вместе с видео.",
      },
      {
        // ── Тест: один правильный ответ ──
        type: "quiz",
        question: "Как называется эта буква? ا",
        emoji: "🤔",
        options: ["Алиф", "Баа", "Джим", "Даль"],
        answer: 0,
      },
      {
        // ── Тест: несколько правильных ответов ──
        type: "quiz-multi",
        question: "Выбери все слова, которые начинаются на «А»:",
        emoji: "✅",
        options: ["Арбуз 🍉", "Банан 🍌", "Апельсин 🍊", "Морковь 🥕"],
        answers: [0, 2], // правильные: «Арбуз» и «Апельсин»
      },
      {
        // ── Скачать файл ──
        type: "download",
        title: "Рабочий лист — Алиф",
        description:
          "Распечатай и обведи букву по пунктиру! Раскрась картинки.",
        icon: "📄",
        src: "", // например: "files/alif_worksheet.pdf"
        filename: "alif_worksheet.pdf",
        fileType: "PDF",
        text: "Попроси взрослого помочь распечатать.",
      },
      {
        // ── Только текст ──
        type: "text",
        emoji: "📖",
        title: "Интересный факт",
        body: "Буква *Алиф* — самая первая в арабском алфавите.\n\nАрабский алфавит называется **«абджад»**.\n\nПолезные ресурсы:\n[Арабский алфавит на Википедии](https://ru.wikipedia.org/wiki/Арабский_алфавит)\n[Учим арабский — YouTube](https://www.youtube.com/results?search_query=арабский+алфавит+для+детей)",
        align: "left",
        size: "normal",
      },
      {
        type: "quiz",
        question: "Какой звук даёт буква Алиф?",
        emoji: "🔊",
        options: ["Б", "А", "Т", "С"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Какая это буква по счёту?",
        emoji: "🔢",
        options: ["Вторая", "Третья", "Первая", "Четвёртая"],
        answer: 2,
      },
    ],
  },
  {
    id: 2,
    letter: "ب",
    name: "Баа",
    nameAr: "بَاء",
    sound: "Б",
    color: "#FF8E53",
    colorLight: "#FFF0E5",
    emoji: "🦋",
    // description: "Буква Баа — как лодочка с точкой снизу!",
    forms: { isolated: "ب", final: "ـب", medial: "ـبـ",  initial: "بـ"},
    slides: [
      {
        type: "image",
        title: "Буква Баа",
        src: "",
        caption: "Баа — вторая буква. Одна точка снизу. Звук: Б",
      },
      { type: "audio", title: "Слушай Баа!", src: "", caption: "" },
      { type: "video", title: "Видео про Баа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ب",
        emoji: "🤔",
        options: ["Алиф", "Баа", "Таа", "Саа"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Баа?",
        emoji: "👀",
        options: ["Две", "Три", "Одна", "Ноль"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Где точка у буквы Баа?",
        emoji: "🎯",
        options: ["Сверху", "Слева", "Снизу", "Справа"],
        answer: 2,
      },
    ],
  },
  {
    id: 3,
    letter: "ت",
    name: "Таа",
    nameAr: "تَاء",
    sound: "Т",
    color: "#FFC947",
    colorLight: "#FFF9E5",
    emoji: "🐢",
    // description: "Таа — как лодочка, но с двумя точками сверху!",
    forms: { isolated: "ت", final: "ـت", medial: "ـتـ",  initial: "تـ"},
    slides: [
      {
        type: "image",
        title: "Буква Таа",
        src: "",
        caption: "Таа — третья буква. Две точки сверху. Звук: Т",
      },
      { type: "audio", title: "Слушай Таа!", src: "", caption: "" },
      { type: "video", title: "Видео про Таа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ت",
        emoji: "🤔",
        options: ["Баа", "Алиф", "Саа", "Таа"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Таа?",
        emoji: "👀",
        options: ["Одна", "Три", "Две", "Ноль"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Где точки у буквы Таа?",
        emoji: "🎯",
        options: ["Снизу", "Сверху", "Слева", "Справа"],
        answer: 1,
      },
    ],
  },
  {
    id: 4,
    letter: "ث",
    name: "Саа",
    nameAr: "ثَاء",
    sound: "С",
    color: "#56C596",
    colorLight: "#E5F9F1",
    emoji: "🌿",
    // description: "Саа — лодочка с тремя точками сверху!",
    forms: { isolated: "ث", final: "ـث", medial: "ـثـ",  initial: "ثـ"},
    slides: [
      {
        type: "image",
        title: "Буква Саа",
        src: "",
        caption: "Саа — четвёртая буква. Три точки сверху.",
      },
      { type: "audio", title: "Слушай Саа!", src: "", caption: "" },
      { type: "video", title: "Видео про Саа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ث",
        emoji: "🤔",
        options: ["Таа", "Баа", "Саа", "Алиф"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Саа?",
        emoji: "👀",
        options: ["Одна", "Две", "Четыре", "Три"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает ثَعْلَب?",
        emoji: "🦊",
        options: ["Медведь", "Волк", "Лиса", "Заяц"],
        answer: 2,
      },
    ],
  },
  {
    id: 5,
    letter: "ج",
    name: "Джим",
    nameAr: "جِيم",
    sound: "ДЖ",
    color: "#4ECDC4",
    colorLight: "#E5F9F8",
    emoji: "🌊",
    // description: "Джим — круглая буква с точкой внутри!",
    forms: { isolated: "ج", final: "ـج", medial: "ـجـ",  initial: "جـ"},
    slides: [
      {
        type: "image",
        title: "Буква Джим",
        src: "",
        caption: "Джим — пятая буква. Звук: ДЖ",
      },
      { type: "audio", title: "Слушай Джим!", src: "", caption: "" },
      { type: "video", title: "Видео про Джим", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ج",
        emoji: "🤔",
        options: ["Хаа", "Джим", "Гайн", "Айн"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает جَمَل?",
        emoji: "🐪",
        options: ["Слон", "Жираф", "Верблюд", "Лошадь"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Как произносится Джим?",
        emoji: "🔊",
        options: ["Г", "Х", "ДЖ", "Ж"],
        answer: 2,
      },
    ],
  },
  {
    id: 6,
    letter: "ح",
    name: "Хаа",
    nameAr: "حَاء",
    sound: "Х",
    color: "blue",
    colorLight: "#F3E5FF",
    emoji: "🐎",
    // description: "Хаа — как Джим, но совсем без точек!",
    forms: { isolated: "ح", final: "ـح", medial: "ـحـ",  initial: "حـ"},
    slides: [
      {
        type: "image",
        title: "Буква Хаа",
        src: "",
        caption: "Хаа — шестая буква. Без точек.",
      },
      { type: "audio", title: "Слушай Хаа!", src: "", caption: "" },
      { type: "video", title: "Видео про Хаа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ح",
        emoji: "🤔",
        options: ["Джим", "Хаа", "Хаа خ", "Айн"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Хаа?",
        emoji: "👀",
        options: ["Одна", "Две", "Три", "Ноль"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает حِصَان?",
        emoji: "🐴",
        options: ["Корова", "Овца", "Лошадь", "Коза"],
        answer: 2,
      },
    ],
  },
  {
    id: 7,
    letter: "خ",
    name: "Хаа (خ)",
    nameAr: "خَاء",
    sound: "Х",
    color: "#EC4899",
    colorLight: "#FFE5F3",
    emoji: "🎀",
    // description: "Хаа خ — как предыдущая, но с точкой сверху!",
    forms: { isolated: "خ", final: "ـخ", medial: "ـخـ",  initial: "خـ"},
    slides: [
      {
        type: "image",
        title: "Буква Хаа خ",
        src: "",
        caption: "Хаа خ — седьмая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Хаа خ!", src: "", caption: "" },
      { type: "video", title: "Видео про Хаа خ", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? خ",
        emoji: "🤔",
        options: ["Хаа ح", "Джим", "Хаа خ", "Айн"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Где точка у буквы Хаа خ?",
        emoji: "👀",
        options: ["Снизу", "Слева", "Внутри", "Сверху"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает خُبْز?",
        emoji: "🍞",
        options: ["Молоко", "Хлеб", "Масло", "Сыр"],
        answer: 1,
      },
    ],
  },
  {
    id: 8,
    letter: "د",
    name: "Даль",
    nameAr: "دَال",
    sound: "Д",
    color: "brown",
    colorLight: "#FFF0E5",
    emoji: "🐻",
    // description: "Даль — простая буква, похожа на угол!",
    forms: { isolated: "د", final: "ـد", medial: "ـد",  initial: "د"},
    slides: [
      {
        type: "image",
        title: "Буква Даль",
        src: "img/dal/exercise_find_dal.jpg",
        caption: `
Ребята, у меня для вас два задания!

1️⃣ задание

⚫️Найдите на нашем плакате букву د

⚫️обведите её

⚫️рядом в кружочке напишите такую же букву

2️⃣ задание

А теперь найдите букву сестричку, которая похожа на د

💖 После отправьте фото, чтобы я посмотрела как у вас получилось выполнить эти задания 📚 💓
`,
      },
      {
        type: "image",
        title: "Послушай и повтори",
        src: "img/dal/bear_1.jpg",
        caption: `
دُبّ
Мишка

هَذا دُبٌّ
Это мишка

ما هَذا؟
Что это?

هذا دُبّ
Это медведь
`,
        audio: "audio/dal/bear_1.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        src: "img/dal/bear_2.jpg",
        caption: `
ما لَوْنُ الدُّبِّ؟
Какой у мишки цвет?

لَوْنُهُ بُنِّيٌّ
Его цвет коричневый (бурый)

هذا دُبٌّ بُنِّيٌّ
Это бурый мишка
`,
        audio: "audio/dal/bear_2.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_3_1.jpg", caption: "" },
          { src: "img/dal/bear_3_2.jpg", caption: "" },
        ],
        text: `
غابَة
Лес

هَذِهِ غابَةٌ
Это лес

الدُّبُّ  الْبُنِّيُّ يَعِيشُ في الْغابَة
Бурый мишка живет в лесу
`,
        audio: "audio/dal/bear_3.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_4_1.jpg", caption: "" },
          { src: "img/dal/bear_4_2.jpg", caption: "" },
        ],
        text: `
كَبير
Большой

هذا دُبٌّ كَبيرٌ
Это большой мишка

صَغير
Маленький

هذا دُبٌّ صَغيرٌ
Это маленький мишка

هذا دَبْدوبٌ
Это медвежонок
`,
        audio: "audio/dal/bear_4.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_5_1.jpg", caption: "" },
          { src: "img/dal/bear_5_2.jpg", caption: "" },
        ],
        text: `
عَسَل
Мёд

هذا عَسَلٌ
Это мёд

الدُّبُّ يُحِبُّ الْعَسَلَ
Мишка любит мёд
`,
        audio: "audio/dal/bear_5.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        src: "img/dal/bear_6.jpg",
        caption: `
  ما لَوْنُ  هَذا الدُّبِّ؟
  Какой цвет у этого медведя?

  لَوْنُهُ أَبْيَضُ
Его цвет белый

هذا دُبٌّ أَبْيَضُ
Это белый медведь
`,
        audio: "audio/dal/bear_6.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_7_1.jpg", caption: "" },
          { src: "img/dal/bear_7_2.jpg", caption: "" },
          { src: "img/dal/bear_7_3.jpg", caption: "" },
        ],
        text: `
هَذا دُبٌّ أَبْيَضُ كَبيرٌ
Это большой белый медведь

وَهَذا دُبٌّ أَبْيَضُ صَغيرٌ
Это маленький белый медведь

هَذا دَبْدُوبٌّ أَبْيَضُ
Это белый медвежонок
`,
        audio: "audio/dal/bear_7.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_8_1.jpg", caption: "" },
          { src: "img/dal/bear_8_2.jpg", caption: "" },
        ],
        text: `
ثَلْج
هَذا ثَلْج
Снег
Это снег

الدُّبُّ الْأَبْيَضُ يَعِيشُ في الثَّلْج
Белый медведь живет в снегу
`,
        audio: "audio/dal/bear_8.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        src: "img/dal/bear_9.jpg",
        caption: `
ما لَوْنُ  هَذا الدُّبِّ؟
Какой цвет у этого медведя?

لَوْنُهُ أَسْوَدُ
Его цвет черный

هذا دُبٌّ أَسْوَدُ
Это черный медведь
`,
        audio: "audio/dal/bear_9.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_10_1.jpg", caption: "" },
          { src: "img/dal/bear_10_2.jpg", caption: "" },
        ],
        text: `
هَذا دُبٌّ أَسْوَدُ كَبيرٌ
Это большой черный медведь

وَهَذا دُبٌّ أَسْوَدُ صَغيرٌ
Это маленький черный медведь

هَذا دَبْدُوبٌّ أَسْوَدُ
Это черный медвежонок
`,
        audio: "audio/dal/bear_10.ogg",
      },
      {
        type: "image",
        title: "Послушай и повтори",
        images: [
          { src: "img/dal/bear_11_1.jpg", caption: "" },
          { src: "img/dal/bear_11_2.jpg", caption: "" },
        ],
        text: `
جِبال
هَذِهِ جِبالٌ
Горы
Это горы

الدُّبُّ أَسْوَدُ يَعِيشُ في الْجِبالِ
Черный медведь живет в горах
`,
        audio: "audio/dal/bear_11.ogg",
      },
      {
        type: "video",
        title: "Видео про Даль",
        youtube: "",
        src: "video/dal/bear_1.mp4",
      },
      {
        type: "text",
        emoji: "📖", // эмодзи-иконка вверху (опционально)
        title: "Давайте поиграем! 🎉", // опционально
        body: `
        ✔️[Про мишку](https://wordwall.net/play/84127/826/104)

        ✔️[Какого цвета мишки?](https://wordwall.net/play/84127/562/527)
        `,
        align: "left", // "left" | "center" | "right"  (по умолчанию left)
        size: "normal", // "small" | "normal" | "large" | "xlarge"
      },
      {
        type: "video",
        title: "Видео про Даль",
        youtube: "",
        src: "video/dal/bear_2.mp4",
        text: `
Стишок про мишку с медвежонком

دوب-دوب-دوب
Топ-топ-топ
(Тяжело топаем ногами как медведь в ритм)

في الغابَةِ يَمْشِي الدُّبّ
В лесу идёт медведь

دُب-دُب-دُب-دُب-دُب
Топи-топи-топи-топ
(Быстро топаем ножками как медвежонок)

وَمَعَهُ الدَّبْدوب
А с ним медвежонок
`,
      },
      {
        type: "download",
        title: "Воркбук по букве Даль",
        description: "Распечатай и обведи букву!",
        icon: "📄", // любой эмодзи
        src: "files/dal/workbook_dal.pdf",
        // filename: "workbook_dal.pdf",
        // fileType: "PDF",
        text: `
Ребята, как у вас дела?
Получается делать задания?
Есть трудности?

Если вы сделали задания в воркбуке, не забудьте показать, что у вас получилось! Нам очень интересно посмотреть!`,
      },
      {
        type: "quiz",
        question: "Какой звук у буквы د?",
        emoji: "🤔",
        options: ["Д д д", "Т т т", "К к к"],
        answer: 0,
      },
      {
        type: "quiz-multi",
        question: "Выбери слова, которые начинаются на د",
        emoji: "✅",
        options: ["دَرَّاجَة", "دُبّ", "بَطَّة", "دُودَة", "شَمْس"],
        answers: [0, 1, 3],
      },
      {
        type: "quiz",
        question: `Как написать по-арабски "ДУ"?`,
        emoji: "🤔",
        options: ["دَ", "دِ", "دُ"],
        answer: 2,
      },
      {
        type: "quiz",
        question: `Как написать по-арабски "ДА"?`,
        emoji: "🤔",
        options: ["دَ", "دِ", "دُ"],
        answer: 0,
      },
      {
        type: "quiz",
        question: `Как написать по-арабски "ДИ"?`,
        emoji: "🤔",
        options: ["دَ", "دِ", "دُ"],
        answer: 1,
      },
      {
        type: "text",
        emoji: "📖", // эмодзи-иконка вверху (опционально)
        title: "Поиграем?", // опционально
        body: `
[Разложи по первой букве](https://wordwall.net/play/85633/885/144)
        `,
        align: "left", // "left" | "center" | "right"  (по умолчанию left)
        size: "normal", // "small" | "normal" | "large" | "xlarge"
      },
      {
        type: "download",
        title: "Раскраска",
        description: "Распечатай и обведи букву!",
        icon: "📄", // любой эмодзи
        src: "files/dal/coloring_duck.jpg",
        // filename: "workbook_dal.pdf",
        // fileType: "PDF",
        text: `
Дорогие мамы!🩵

Подготовьте, пожалуйста, к следующему уроку:

- звуковой аппарат;

- пустой листочек-карточка для буквы;

- распечатанная страница-раскраска с уткой;

- жёлтый карандаш или фломастер;

- пластилин жёлтого и красного цвета.

БаракаЛлаху фикум🎀💕`,
      },
    ],
  },
  {
    id: 9,
    letter: "ذ",
    name: "Заль",
    nameAr: "ذَال",
    sound: "З",
    color: "#84CC16",
    colorLight: "#F0FFE5",
    emoji: "🌱",
    // description: "Заль — как Даль, но с точкой сверху!",
    forms: { isolated: "ذ", final: "ـذ", medial: "ـذ",  initial: "ذ"},
    slides: [
      {
        type: "image",
        title: "Буква Заль",
        src: "",
        caption: "Заль — девятая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Заль!", src: "", caption: "" },
      { type: "video", title: "Видео про Заль", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ذ",
        emoji: "🤔",
        options: ["Даль", "Заль", "Раа", "Зайн"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Чем Заль отличается от Даль?",
        emoji: "👀",
        options: ["Формой", "Точкой снизу", "Точкой сверху", "Размером"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает ذِئْب?",
        emoji: "🐺",
        options: ["Лиса", "Медведь", "Волк", "Кот"],
        answer: 2,
      },
    ],
  },
  {
    id: 10,
    letter: "ر",
    name: "Раа",
    nameAr: "رَاء",
    sound: "Р",
    color: "#06B6D4",
    colorLight: "#E5F9FD",
    emoji: "🌈",
    // description: "Раа — изогнутая буква, похожая на хвостик!",
    forms: { isolated: "ر", final: "ـر", medial: "ـر",  initial: "ر"},
    slides: [
      {
        type: "image",
        title: "Буква Раа",
        src: "",
        caption: "Раа — десятая буква. Звук: Р",
      },
      { type: "audio", title: "Слушай Раа!", src: "", caption: "" },
      { type: "video", title: "Видео про Раа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ر",
        emoji: "🤔",
        options: ["Зайн", "Раа", "Даль", "Заль"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Раа?",
        emoji: "👀",
        options: ["Одна", "Две", "Три", "Ноль"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает رَبِيع?",
        emoji: "🌸",
        options: ["Лето", "Осень", "Зима", "Весна"],
        answer: 3,
      },
    ],
  },
  {
    id: 11,
    letter: "ز",
    name: "Зай",
    nameAr: "زَاي",
    sound: "З",
    color: "#8B5CF6",
    colorLight: "#F0E5FF",
    emoji: "⚡",
    // description: "Зайн — как Раа, но с точкой сверху!",
    forms: { isolated: "ز", final: "ـز", medial: "ـز",  initial: "ز"},
    slides: [
      {
        type: "image",
        title: "Буква Зайн",
        src: "",
        caption: "Зайн — одиннадцатая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Зайн!", src: "", caption: "" },
      { type: "video", title: "Видео про Зайн", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ز",
        emoji: "🤔",
        options: ["Раа", "Заль", "Зайн", "Даль"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Чем Зайн отличается от Раа?",
        emoji: "👀",
        options: ["Формой", "Точкой сверху", "Точкой снизу", "Размером"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает زَرَافَة?",
        emoji: "🦒",
        options: ["Слон", "Жираф", "Зебра", "Лев"],
        answer: 1,
      },
    ],
  },
  {
    id: 12,
    letter: "س",
    name: "Сиин",
    nameAr: "سِين",
    sound: "С",
    color: "#EF4444",
    colorLight: "#FFE5E5",
    emoji: "🌊",
    // description: "Сиин — буква с тремя зубчиками!",
    forms: { isolated: "س", final: "ـس", medial: "ـسـ",  initial: "سـ"},
    slides: [
      {
        type: "image",
        title: "Буква Сиин",
        src: "",
        caption: "Сиин — двенадцатая буква. Три зубчика.",
      },
      { type: "audio", title: "Слушай Сиин!", src: "", caption: "" },
      { type: "video", title: "Видео про Сиин", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? س",
        emoji: "🤔",
        options: ["Шиин", "Сиин", "Саа", "Сад"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Сколько зубчиков у буквы Сиин?",
        emoji: "👀",
        options: ["Два", "Четыре", "Три", "Один"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает سَمَكَة?",
        emoji: "🐟",
        options: ["Птица", "Рыбка", "Лягушка", "Краб"],
        answer: 1,
      },
    ],
  },
  {
    id: 13,
    letter: "ش",
    name: "Шиин",
    nameAr: "شِين",
    sound: "Ш",
    color: "#F59E0B",
    colorLight: "#FFF8E5",
    emoji: "☀️",
    // description: "Шиин — как Сиин, но с тремя точками сверху!",
    forms: { isolated: "ش", final: "ـش", medial: "ـشـ",  initial: "شـ"},
    slides: [
      {
        type: "image",
        title: "Буква Шиин",
        src: "",
        caption: "Шиин — тринадцатая буква. Три точки сверху.",
      },
      { type: "audio", title: "Слушай Шиин!", src: "", caption: "" },
      { type: "video", title: "Видео про Шиин", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ش",
        emoji: "🤔",
        options: ["Сиин", "Шиин", "Саа", "Сад"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает شَمْس?",
        emoji: "☀️",
        options: ["Луна", "Звезда", "Солнце", "Облако"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Сколько точек у Шиин?",
        emoji: "👀",
        options: ["Одна", "Две", "Ноль", "Три"],
        answer: 3,
      },
    ],
  },
  {
    id: 14,
    letter: "ص",
    name: "Сад",
    nameAr: "صَاد",
    sound: "С",
    color: "#10B981",
    colorLight: "#E5FFF5",
    emoji: "🌿",
    // description: "Сад — круглая буква с хвостиком!",
    forms: { isolated: "ص", final: "ـص", medial: "ـصـ",  initial: "صـ"},
    slides: [
      {
        type: "image",
        title: "Буква Сад",
        src: "",
        caption: "Сад — четырнадцатая буква.",
      },
      { type: "audio", title: "Слушай Сад!", src: "", caption: "" },
      { type: "video", title: "Видео про Сад", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ص",
        emoji: "🤔",
        options: ["Дад", "Сиин", "Сад", "Шиин"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает صَبَاح?",
        emoji: "🌅",
        options: ["Вечер", "Ночь", "День", "Утро"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает صَدِيق?",
        emoji: "🤝",
        options: ["Враг", "Друг", "Сосед", "Учитель"],
        answer: 1,
      },
    ],
  },
  {
    id: 15,
    letter: "ض",
    name: "Дад",
    nameAr: "ضَاد",
    sound: "Д",
    color: "#3B82F6",
    colorLight: "#E5F0FF",
    emoji: "💙",
    // description: "Дад — как Сад, но с точкой сверху!",
    forms: { isolated: "ض", final: "ـض", medial: "ـضـ",  initial: "ضـ"},
    slides: [
      {
        type: "image",
        title: "Буква Дад",
        src: "",
        caption: "Дад — пятнадцатая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Дад!", src: "", caption: "" },
      { type: "video", title: "Видео про Дад", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ض",
        emoji: "🤔",
        options: ["Сад", "Дад", "Таа ط", "Заа"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Чем Дад отличается от Сад?",
        emoji: "👀",
        options: ["Формой", "Точкой снизу", "Точкой сверху", "Размером"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает ضَفْدَع?",
        emoji: "🐸",
        options: ["Рыба", "Змея", "Лягушка", "Краб"],
        answer: 2,
      },
    ],
  },
  {
    id: 16,
    letter: "ط",
    name: "Таа (ط)",
    nameAr: "طَاء",
    sound: "Т",
    color: "#F43F5E",
    colorLight: "#FFE5EA",
    emoji: "🍕",
    // description: "Таа ط — круглая буква с высокой палочкой!",
    forms: { isolated: "ط", final: "ـط", medial: "ـطـ",  initial: "طـ"},
    slides: [
      {
        type: "image",
        title: "Буква Таа ط",
        src: "",
        caption: "Таа ط — шестнадцатая буква.",
      },
      { type: "audio", title: "Слушай Таа ط!", src: "", caption: "" },
      { type: "video", title: "Видео про Таа ط", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ط",
        emoji: "🤔",
        options: ["Таа ت", "Заа", "Таа ط", "Дад"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает طَائِر?",
        emoji: "🐦",
        options: ["Рыба", "Птица", "Насекомое", "Зверь"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает طَعَام?",
        emoji: "🍽️",
        options: ["Вода", "Игрушка", "Еда", "Сон"],
        answer: 2,
      },
    ],
  },
  {
    id: 17,
    letter: "ظ",
    name: "Заа",
    nameAr: "ظَاء",
    sound: "З",
    color: "#7C3AED",
    colorLight: "#F0E5FF",
    emoji: "🌙",
    // description: "Заа — как Таа ط, но с точкой сверху!",
    forms: { isolated: "ظ", final: "ـظ", medial: "ـظـ",  initial: "ظـ"},
    slides: [
      {
        type: "image",
        title: "Буква Заа",
        src: "",
        caption: "Заа — семнадцатая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Заа!", src: "", caption: "" },
      { type: "video", title: "Видео про Заа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ظ",
        emoji: "🤔",
        options: ["Таа ط", "Заа", "Айн", "Гайн"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Чем Заа отличается от Таа ط?",
        emoji: "👀",
        options: ["Формой", "Точкой снизу", "Точкой сверху", "Хвостиком"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает ظَبْي?",
        emoji: "🦌",
        options: ["Олень", "Корова", "Газель", "Коза"],
        answer: 2,
      },
    ],
  },
  {
    id: 18,
    letter: "ع",
    name: "Айн",
    nameAr: "عَيْن",
    sound: "А",
    color: "#059669",
    colorLight: "#E5FFF5",
    emoji: "👁️",
    // description: "Айн — особая буква, произносится из горла!",
    forms: { isolated: "ع", final: "ـع", medial: "ـعـ",  initial: "عـ"},
    slides: [
      {
        type: "image",
        title: "Буква Айн",
        src: "",
        caption: "Айн — восемнадцатая буква.",
      },
      { type: "audio", title: "Слушай Айн!", src: "", caption: "" },
      { type: "video", title: "Видео про Айн", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ع",
        emoji: "🤔",
        options: ["Гайн", "Хаа", "Айн", "Фаа"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает عَيْن?",
        emoji: "👁️",
        options: ["Ухо", "Нос", "Рот", "Глаз"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает عَسَل?",
        emoji: "🍯",
        options: ["Молоко", "Сок", "Мёд", "Вода"],
        answer: 2,
      },
    ],
  },
  {
    id: 19,
    letter: "غ",
    name: "Гайн",
    nameAr: "غَيْن",
    sound: "Г",
    color: "#DC2626",
    colorLight: "#FFE5E5",
    emoji: "🌲",
    // description: "Гайн — как Айн, но с точкой сверху!",
    forms: { isolated: "غ", final: "ـغ", medial: "ـغـ",  initial: "غـ"},
    slides: [
      {
        type: "image",
        title: "Буква Гайн",
        src: "",
        caption: "Гайн — девятнадцатая буква. Точка сверху.",
      },
      { type: "audio", title: "Слушай Гайн!", src: "", caption: "" },
      { type: "video", title: "Видео про Гайн", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? غ",
        emoji: "🤔",
        options: ["Айн", "Гайн", "Фаа", "Хаа"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Чем Гайн отличается от Айн?",
        emoji: "👀",
        options: ["Формой", "Размером", "Точкой сверху", "Хвостиком"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает غَابَة?",
        emoji: "🌲",
        options: ["Море", "Пустыня", "Лес", "Поле"],
        answer: 2,
      },
    ],
  },
  {
    id: 20,
    letter: "ف",
    name: "Фаа",
    nameAr: "فَاء",
    sound: "Ф",
    color: "#0891B2",
    colorLight: "#E5F8FF",
    emoji: "🦋",
    // description: "Фаа — кружочек с носиком и точкой сверху!",
    forms: { isolated: "ف", final: "ـف", medial: "ـفـ",  initial: "فـ"},
    slides: [
      {
        type: "image",
        title: "Буква Фаа",
        src: "",
        caption: "Фаа — двадцатая буква. Звук: Ф",
      },
      { type: "audio", title: "Слушай Фаа!", src: "", caption: "" },
      { type: "video", title: "Видео про Фаа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ف",
        emoji: "🤔",
        options: ["Каф ق", "Каф ك", "Фаа", "Баа"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает فِيل?",
        emoji: "🐘",
        options: ["Слон", "Бегемот", "Носорог", "Буйвол"],
        answer: 0,
      },
      {
        type: "quiz",
        question: "Что означает فَرَاشَة?",
        emoji: "🦋",
        options: ["Пчела", "Бабочка", "Стрекоза", "Жук"],
        answer: 1,
      },
    ],
  },
  {
    id: 21,
    letter: "ق",
    name: "Каф (ق)",
    nameAr: "قَاف",
    sound: "К",
    color: "#7C3AED",
    colorLight: "#F3E5FF",
    emoji: "🌙",
    // description: "Каф ق — кружок с двумя точками сверху!",
    forms: { isolated: "ق", final: "ـق", medial: "ـقـ",  initial: "قـ"},
    slides: [
      {
        type: "image",
        title: "Буква Каф ق",
        src: "",
        caption: "Каф ق — двадцать первая буква. Две точки.",
      },
      { type: "audio", title: "Слушай Каф ق!", src: "", caption: "" },
      { type: "video", title: "Видео про Каф ق", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ق",
        emoji: "🤔",
        options: ["Фаа", "Каф ك", "Каф ق", "Баа"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает قِطَّة?",
        emoji: "🐱",
        options: ["Собака", "Кошка", "Кролик", "Хомяк"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Сколько точек у Каф ق?",
        emoji: "👀",
        options: ["Одна", "Три", "Ноль", "Две"],
        answer: 3,
      },
    ],
  },
  {
    id: 22,
    letter: "ك",
    name: "Каф (ك)",
    nameAr: "كَاف",
    sound: "К",
    color: "#D97706",
    colorLight: "#FFF8E5",
    emoji: "📚",
    // description: "Каф ك — буква-крючок без точек!",
    forms: { isolated: "ك", final: "ـك", medial: "ـكـ",  initial: "كـ"},
    slides: [
      {
        type: "image",
        title: "Буква Каф ك",
        src: "",
        caption: "Каф ك — двадцать вторая буква. Без точек.",
      },
      { type: "audio", title: "Слушай Каф ك!", src: "", caption: "" },
      { type: "video", title: "Видео про Каф ك", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ك",
        emoji: "🤔",
        options: ["Каф ق", "Лаам", "Каф ك", "Миим"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает كِتَاب?",
        emoji: "📚",
        options: ["Тетрадь", "Книга", "Ручка", "Карандаш"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает كُرَة?",
        emoji: "⚽",
        options: ["Кукла", "Машинка", "Мяч", "Кубик"],
        answer: 2,
      },
    ],
  },
  {
    id: 23,
    letter: "ل",
    name: "Лаам",
    nameAr: "لَام",
    sound: "Л",
    color: "#BE185D",
    colorLight: "#FFE5F3",
    emoji: "🎵",
    // description: "Лаам — высокая изогнутая буква!",
    forms: { isolated: "ل", final: "ـل", medial: "ـلـ",  initial: "لـ"},
    slides: [
      {
        type: "image",
        title: "Буква Лаам",
        src: "",
        caption: "Лаам — двадцать третья буква. Звук: Л",
      },
      { type: "audio", title: "Слушай Лаам!", src: "", caption: "" },
      { type: "video", title: "Видео про Лаам", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ل",
        emoji: "🤔",
        options: ["Миим", "Нуун", "Лаам", "Каф ك"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает لَيْل?",
        emoji: "🌃",
        options: ["День", "Вечер", "Ночь", "Утро"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает لَوْن?",
        emoji: "🎨",
        options: ["Форма", "Цвет", "Размер", "Запах"],
        answer: 1,
      },
    ],
  },
  {
    id: 24,
    letter: "م",
    name: "Миим",
    nameAr: "مِيم",
    sound: "М",
    color: "#16A34A",
    colorLight: "#E5FFE5",
    emoji: "🌍",
    // description: "Миим — маленький кружочек с хвостиком!",
    forms: { isolated: "م", final: "ـم", medial: "ـمـ",  initial: "مـ"},
    slides: [
      {
        type: "image",
        title: "Буква Миим",
        src: "",
        caption: "Миим — двадцать четвёртая буква. Звук: М",
      },
      { type: "audio", title: "Слушай Миим!", src: "", caption: "" },
      { type: "video", title: "Видео про Миим", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? م",
        emoji: "🤔",
        options: ["Нуун", "Лаам", "Миим", "Хаа ه"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает مَاء?",
        emoji: "💧",
        options: ["Сок", "Вода", "Молоко", "Чай"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает مَوْز?",
        emoji: "🍌",
        options: ["Апельсин", "Яблоко", "Банан", "Груша"],
        answer: 2,
      },
    ],
  },
  {
    id: 25,
    letter: "ن",
    name: "Нуун",
    nameAr: "نُون",
    sound: "Н",
    color: "#0284C7",
    colorLight: "#E5F5FF",
    emoji: "⭐",
    // description: "Нуун — маленькая чаша с точкой сверху!",
    forms: { isolated: "ن", final: "ـن", medial: "ـنـ",  initial: "نـ"},
    slides: [
      {
        type: "image",
        title: "Буква Нуун",
        src: "",
        caption: "Нуун — двадцать пятая буква. Звук: Н",
      },
      { type: "audio", title: "Слушай Нуун!", src: "", caption: "" },
      { type: "video", title: "Видео про Нуун", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ن",
        emoji: "🤔",
        options: ["Уаау", "Яа", "Хаа ه", "Нуун"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает نَجْمَة?",
        emoji: "⭐",
        options: ["Луна", "Солнце", "Звезда", "Планета"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает نَمِر?",
        emoji: "🐯",
        options: ["Лев", "Леопард", "Тигр", "Ягуар"],
        answer: 2,
      },
    ],
  },
  {
    id: 26,
    letter: "ه",
    name: "Хаа (ه)",
    nameAr: "هَاء",
    sound: "Х",
    color: "#9333EA",
    colorLight: "#F5E5FF",
    emoji: "🏠",
    // description: "Хаа ه — буква-домик, меняет форму!",
    forms: { isolated: "ه", final: "ـه", medial: "ـهـ",  initial: "هـ"},
    slides: [
      {
        type: "image",
        title: "Буква Хаа ه",
        src: "",
        caption: "Хаа ه — двадцать шестая буква.",
      },
      { type: "audio", title: "Слушай Хаа ه!", src: "", caption: "" },
      { type: "video", title: "Видео про Хаа ه", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? ه",
        emoji: "🤔",
        options: ["Нуун", "Хаа ه", "Уаау", "Яа"],
        answer: 1,
      },
      {
        type: "quiz",
        question: "Что означает هَدِيَّة?",
        emoji: "🎁",
        options: ["Письмо", "Цветок", "Подарок", "Торт"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает هِرَّة?",
        emoji: "🐱",
        options: ["Собака", "Кошечка", "Птица", "Рыбка"],
        answer: 1,
      },
    ],
  },
  {
    id: 27,
    letter: "و",
    name: "Уаау",
    nameAr: "وَاو",
    sound: "В/У",
    color: "#EA580C",
    colorLight: "#FFF0E5",
    emoji: "🌺",
    // description: "Уаау — кружок с хвостиком вниз!",
    forms: { isolated: "و", final: "ـو", medial: "ـو",  initial: "و"},
    slides: [
      {
        type: "image",
        title: "Буква Уаау",
        src: "",
        caption: "Уаау — двадцать седьмая буква.",
      },
      { type: "audio", title: "Слушай Уаау!", src: "", caption: "" },
      { type: "video", title: "Видео про Уаау", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется эта буква? و",
        emoji: "🤔",
        options: ["Яа", "Хаа ه", "Уаау", "Нуун"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает وَرْدَة?",
        emoji: "🌹",
        options: ["Ромашка", "Тюльпан", "Роза", "Лилия"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Что означает وَلَد?",
        emoji: "👦",
        options: ["Девочка", "Мальчик", "Мама", "Папа"],
        answer: 1,
      },
    ],
  },
  {
    id: 28,
    letter: "ي",
    name: "Яа",
    nameAr: "يَاء",
    sound: "Й/И",
    color: "#DB2777",
    colorLight: "#FFE5F3",
    emoji: "🎉",
    // description: "Яа — последняя буква! Две точки снизу.",
    forms: { isolated: "ي", final: "ـي", medial: "ـيـ",  initial: "يـ"},
    slides: [
      {
        type: "image",
        title: "Буква Яа",
        src: "",
        caption: "Яа — двадцать восьмая, последняя буква!",
      },
      { type: "audio", title: "Слушай Яа!", src: "", caption: "" },
      { type: "video", title: "Видео про Яа", youtube: "", src: "" },
      {
        type: "quiz",
        question: "Как называется последняя буква? ي",
        emoji: "🤔",
        options: ["Уаау", "Нуун", "Хаа ه", "Яа"],
        answer: 3,
      },
      {
        type: "quiz",
        question: "Что означает يَد?",
        emoji: "✋",
        options: ["Нога", "Голова", "Рука", "Спина"],
        answer: 2,
      },
      {
        type: "quiz",
        question: "Сколько точек у буквы Яа?",
        emoji: "👀",
        options: ["Одна", "Три", "Две", "Ноль"],
        answer: 2,
      },
    ],
  },
];
