const supportedSmileys = [
  "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
  "🫠", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺",
  "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗",
  "🤭", "🫢", "🫣", "🤫", "🤔", "🫡", "🤐", "🤨", "😐", "😑",
  "😶", "🫥", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "🫨",
  "🙂‍↔️", "🙂‍↕️", "😌", "😔", "😪", "🤤", "😴", "🫩", "😷", "🤒",
  "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯",
  "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "🫤", "😟", "🙁",
  "☹", "😮", "😯", "😲", "😳", "🥺", "🥹", "😦", "😧", "😨",
  "😰", "😥", "😢", "😭", "😱", "😖", "😞", "😓", "😩", "😫",
  "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩",
  "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹",
  "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊"
];

const profileEntries = [
  ["😀", "happy", "soft"], ["😁", "happy", "big"], ["😂", "laugh", "big"], ["🤣", "laugh", "big"], ["😃", "happy", "soft"],
  ["😄", "happy", "soft"], ["😅", "laugh", "uneasy"], ["😆", "laugh", "big"], ["😉", "wink", "soft"], ["😊", "happy", "soft"],
  ["😋", "tongue", "tongue"], ["😎", "cool", "cool"], ["😍", "love", "love"], ["🥰", "love", "love"], ["😘", "kiss", "love"], ["😗", "kiss", "soft"],
  ["😙", "kiss", "soft"], ["😚", "kiss", "soft"], ["🙂", "happy", "soft"], ["🥲", "sad", "soft"], ["🤗", "party", "party"], ["🤩", "party", "party"],
  ["🤔", "thinking", "think"], ["🤨", "thinking", "think"], ["😐", "neutral", "blank"], ["😑", "neutral", "blank"], ["😶", "neutral", "blank"],
  ["🙄", "thinking", "rolling"], ["😏", "neutral", "smirk"], ["😣", "sad", "uneasy"], ["😥", "cry", "cry"], ["😮", "surprised", "soft"],
  ["🤐", "neutral", "mask"], ["😯", "surprised", "soft"], ["😪", "sleepy", "blank"], ["😫", "sad", "uneasy"], ["😴", "sleepy", "blank"], ["🫩", "sleepy", "blank"],
  ["😌", "sleepy", "soft"], ["😛", "tongue", "tongue"], ["😜", "wink", "tongue"], ["😝", "tongue", "tongue"], ["🤤", "dizzy", "uneasy"],
  ["😒", "neutral", "smirk"], ["😓", "fear", "fear"], ["😔", "sad", "sad"], ["😕", "sad", "sad"], ["🙃", "sad", "upside"],
  ["🫠", "sad", "melt"], ["🤑", "party", "money"], ["😲", "surprised", "soft"], ["☹️", "sad", "sad"], ["🙁", "sad", "sad"],
  ["😖", "sad", "uneasy"], ["😞", "sad", "sad"], ["😟", "sad", "sad"], ["😤", "angry", "angry"], ["😢", "cry", "cry"],
  ["😭", "cry", "cry"], ["😦", "fear", "fear"], ["😧", "fear", "fear"], ["😨", "fear", "fear"], ["😩", "sad", "uneasy"], ["🥱", "sleepy", "blank"],
  ["🤯", "shocked", "hot"], ["😬", "shocked", "uneasy"], ["😰", "fear", "fear"], ["😱", "shocked", "fear"], ["🥵", "shocked", "hot"],
  ["🥶", "shocked", "cold"], ["😳", "surprised", "hot"], ["🤪", "dizzy", "dizzy"], ["😵", "shocked", "dizzy"], ["😵‍💫", "shocked", "dizzy"],
  ["😡", "angry", "angry"], ["😠", "angry", "angry"], ["🤬", "angry", "angry"], ["😷", "mask", "mask"], ["🤒", "mask", "hot"],
  ["🤕", "mask", "uneasy"], ["🤢", "mask", "uneasy"], ["🤮", "mask", "uneasy"], ["🤧", "mask", "cold"], ["😇", "happy", "halo"],
  ["💩", "dead", "uneasy"],
  ["🥳", "party", "party"], ["🥴", "dizzy", "dizzy"], ["🥺", "sad", "soft"], ["🤠", "happy", "soft"], ["🤡", "kiss", "party"],
  ["🤥", "neutral", "smirk"], ["🤫", "neutral", "blank"], ["🤭", "neutral", "soft"], ["🫢", "surprised", "blank"], ["🫣", "fear", "blank"], ["🙂‍↔️", "neutral", "soft"], ["🙂‍↕️", "neutral", "soft"],
  ["🫡", "neutral", "soft"], ["🤓", "cool", "cool"], ["🧐", "thinking", "think"], ["😈", "angry", "angry"], ["👿", "angry", "angry"],
  ["👹", "angry", "angry"], ["👺", "angry", "angry"], ["💀", "dead", "dead"], ["☠️", "dead", "dead"], ["👻", "dead", "soft"], ["🎃", "party", "party"],
  ["👽", "dead", "alien"], ["👾", "dead", "robot"], ["🤖", "dead", "robot"], ["😺", "happy", "soft"], ["😸", "happy", "big"],
  ["😹", "laugh", "big"], ["😻", "love", "love"], ["😼", "neutral", "smirk"], ["😽", "kiss", "love"], ["🙀", "shocked", "fear"], ["🙈", "fear", "blank"], ["🙉", "fear", "blank"], ["🙊", "neutral", "blank"],
  ["😿", "cry", "cry"], ["😾", "angry", "angry"], ["🫤", "sad", "smirk"], ["🫥", "neutral", "blank"], ["🫨", "shocked", "dizzy"],
  ["🥸", "cool", "cool"], ["☺️", "happy", "soft"], ["😮‍💨", "sleepy", "soft"], ["😶‍🌫️", "sleepy", "blank"], ["🥹", "cry", "soft"], ["💋", "kiss", "love"], ["💌", "love", "love"]
];

const faceEl = document.getElementById("sadFace");
const sadMacEl = document.getElementById("sadMac");
const inputEl = document.getElementById("emojiInput");
const statusEl = document.getElementById("emojiStatus");
const themeToggleEl = document.getElementById("themeToggle");

const overrideKeywordPhrases = [
  "error",
  "404",
  "wtf",
  "wth",
  "god",
  "not found"
];

const heroGoodGuyBaseNames = [
  "superman", "batman", "wonder woman", "flash", "green lantern", "aquaman", "cyborg", "martian manhunter", "nightwing", "robin",
  "batgirl", "supergirl", "green arrow", "black canary", "shazam", "constantine", "zatanna", "hawkman", "hawkgirl", "doctor fate",
  "iron man", "captain america", "thor", "hulk", "black widow", "hawkeye", "spider-man", "wolverine", "storm", "cyclops",
  "jean grey", "rogue", "beast", "nightcrawler", "daredevil", "doctor strange", "scarlet witch", "vision", "ant-man", "wasp",
  "black panther", "captain marvel", "falcon", "winter soldier", "moon knight", "she-hulk", "ms marvel", "shang-chi", "luke cage", "iron fist",
  "jessica jones", "blade", "silver surfer", "nova", "groot", "star-lord", "gamora", "drax", "rocket", "miles morales",
  "spider-gwen", "elektra", "nick fury", "agent coulson", "hellboy", "captain planet", "the thing", "invisible woman", "mr fantastic", "human torch",
  "optimus prime", "bumblebee", "link", "zelda", "mario", "luigi", "samus", "master chief", "kratos", "lara croft",
  "geralt", "arthur morgan", "solid snake", "r2-d2", "obi-wan", "luke skywalker", "rey", "ahsoka", "han solo", "leia",
  "captain picard", "spock", "kirk", "doctor who", "harry potter", "hermione", "frodo", "aragorn", "gandalf", "katniss everdeen"
];

const goodProphetSaintGodBaseNames = [
  "jesus", "mary", "joseph", "muhammad", "allah", "yahweh", "adonai", "elohim", "brahma", "vishnu",
  "shiva", "krishna", "rama", "hanuman", "ganesha", "durga", "kali", "saraswati", "lakshmi", "parvati",
  "indra", "agni", "varuna", "yama", "surya", "chandra", "skanda", "murugan", "arjuna", "buddha",
  "amitabha", "avalokiteshvara", "guan yin", "tara", "manjushri", "zeus", "hera", "poseidon", "athena", "apollo",
  "artemis", "aphrodite", "hephaestus", "hermes", "demeter", "hestia", "dionysus", "persephone", "odin", "thor",
  "freya", "freyr", "tyr", "baldr", "heimdall", "ra", "osiris", "isis", "horus", "anubis",
  "ptah", "amaterasu", "susanoo", "inari", "izanagi", "izanami", "quetzalcoatl", "viracocha", "inti", "saint peter",
  "saint paul", "saint francis", "saint anthony", "saint michael", "moses", "abraham", "noah", "isaiah", "jeremiah", "ezekiel",
  "saint therese", "saint augustine", "saint thomas", "saint benedict", "saint patrick", "saint nicholas", "saint george", "saint catherine", "saint christopher", "saint jude",
  "saint clare", "saint monica", "saint rita", "saint lucy", "saint sebastian", "saint john", "saint mary magdalene", "saint josemaria", "saint maximilian", "saint padre pio"
];

const top200Languages = [
  "english", "mandarin chinese", "hindi", "spanish", "french", "standard arabic", "bengali", "portuguese", "russian", "urdu",
  "indonesian", "german", "japanese", "nigerian pidgin", "egyptian arabic", "marathi", "telugu", "turkish", "tamil", "vietnamese",
  "wu chinese", "korean", "persian", "hausa", "thai", "javanese", "italian", "gujarati", "min nan chinese", "amharic",
  "bhojpuri", "eastern punjabi", "jin chinese", "yue chinese", "burmese", "polish", "yoruba", "xiang chinese", "malayalam", "odia",
  "sundanese", "sindhi", "algerian arabic", "moroccan arabic", "ukrainian", "igbo", "tagalog", "romanian", "dutch", "azerbaijani",
  "nepali", "uzbek", "pashto", "kannada", "malay", "serbo-croatian", "assamese", "maithili", "sinhala", "chittagonian",
  "saraiki", "khmer", "magahi", "zulu", "somali", "chhattisgarhi", "cebuano", "northern kurdish", "czech", "greek",
  "kinyarwanda", "deccan", "hungarian", "belarusian", "kazakh", "swedish", "bulgarian", "haitian creole", "danish", "finnish",
  "slovak", "norwegian", "hebrew", "irish", "lithuanian", "latvian", "slovenian", "estonian", "croatian", "bosnian",
  "serbian", "albanian", "armenian", "georgian", "lao", "mongolian", "tigrinya", "swahili", "catalan", "galician",
  "afrikaans", "icelandic", "luxembourgish", "maltese", "welsh", "scots gaelic", "basque", "occitan", "breton", "corsican",
  "frisian", "sardinian", "newari", "tibetan", "uighur", "tajik", "turkmen", "kyrgyz", "yakut", "tatar",
  "bashkir", "chechen", "avar", "lezghian", "dargwa", "udmurt", "mari", "komi", "chuvash", "kalmyk",
  "bemba", "shona", "xhosa", "tswana", "sesotho", "kongo", "lingala", "wolof", "fula", "kanuri",
  "oromo", "sidamo", "afar", "malagasy", "maori", "samoan", "tongan", "fijian", "tahitian", "hawaiian",
  "hmong", "karen", "shan", "tai dam", "rohingya", "meitei", "kokborok", "mizo", "khasi", "garo",
  "bodo", "dogri", "kashmiri", "konkani", "santali", "mundari", "ho", "kurukh", "gondi", "bhili",
  "awadhi", "braj bhasha", "haryanvi", "marwari", "rajasthani", "garhwali", "kumaoni", "assyrian neo-aramaic", "aramaic", "syriac",
  "coptic", "berber", "kabyle", "tuareg tamasheq", "quechua", "aymara", "guarani", "nahuatl", "mayan yucatec", "zapotec",
  "mixtec", "mapudungun", "cree", "ojibwe", "inuktitut", "kalaallisut", "cherokee", "navajo", "apache", "choctaw"
];

const nativeLanguageLabelOverrides = {
  english: "English",
  "mandarin chinese": "中文",
  hindi: "हिन्दी",
  spanish: "Español",
  french: "Français",
  "standard arabic": "العربية الفصحى",
  bengali: "বাংলা",
  portuguese: "Português",
  russian: "Русский",
  urdu: "اردو",
  indonesian: "Bahasa Indonesia",
  german: "Deutsch",
  japanese: "日本語",
  marathi: "मराठी",
  telugu: "తెలుగు",
  turkish: "Türkçe",
  tamil: "தமிழ்",
  vietnamese: "Tiếng Việt",
  korean: "한국어",
  persian: "فارسی",
  thai: "ไทย",
  italian: "Italiano",
  gujarati: "ગુજરાતી",
  amharic: "አማርኛ",
  "eastern punjabi": "ਪੰਜਾਬੀ",
  polish: "Polski",
  yoruba: "Yorùbá",
  malayalam: "മലയാളം",
  odia: "ଓଡ଼ିଆ",
  sindhi: "سنڌي",
  ukrainian: "Українська",
  igbo: "Igbo",
  tagalog: "Tagalog",
  romanian: "Română",
  dutch: "Nederlands",
  azerbaijani: "Azərbaycan dili",
  nepali: "नेपाली",
  uzbek: "Oʻzbek",
  pashto: "پښتو",
  kannada: "ಕನ್ನಡ",
  malay: "Bahasa Melayu",
  assamese: "অসমীয়া",
  maithili: "मैथिली",
  sinhala: "සිංහල",
  khmer: "ខ្មែរ",
  zulu: "isiZulu",
  somali: "Soomaali",
  cebuano: "Cebuano",
  czech: "Čeština",
  greek: "Ελληνικά",
  hungarian: "Magyar",
  belarusian: "Беларуская",
  kazakh: "Қазақ тілі",
  swedish: "Svenska",
  bulgarian: "Български",
  "haitian creole": "Kreyòl Ayisyen",
  danish: "Dansk",
  finnish: "Suomi",
  slovak: "Slovenčina",
  norwegian: "Norsk",
  hebrew: "עברית",
  irish: "Gaeilge",
  lithuanian: "Lietuvių",
  latvian: "Latviešu",
  slovenian: "Slovenščina",
  estonian: "Eesti",
  croatian: "Hrvatski",
  bosnian: "Bosanski",
  serbian: "Српски",
  albanian: "Shqip",
  armenian: "Հայերեն",
  georgian: "ქართული",
  lao: "ລາວ",
  mongolian: "Монгол",
  tigrinya: "ትግርኛ",
  swahili: "Kiswahili",
  catalan: "Català",
  galician: "Galego",
  afrikaans: "Afrikaans",
  icelandic: "Íslenska",
  maltese: "Malti",
  welsh: "Cymraeg",
  "scots gaelic": "Gàidhlig",
  basque: "Euskara",
  tibetan: "བོད་སྐད",
  uighur: "ئۇيغۇرچە",
  tajik: "Тоҷикӣ",
  turkmen: "Türkmen",
  kyrgyz: "Кыргызча",
  tatar: "Татарча",
  chechen: "Нохчийн",
  shona: "chiShona",
  xhosa: "isiXhosa",
  tswana: "Setswana",
  sesotho: "Sesotho",
  lingala: "Lingála",
  wolof: "Wolof",
  oromo: "Afaan Oromoo",
  malagasy: "Malagasy",
  maori: "Te Reo Māori",
  samoan: "Gagana Samoa",
  tongan: "Lea Faka-Tonga",
  fijian: "Na Vosa Vakaviti",
  hawaiian: "ʻŌlelo Hawaiʻi",
  hmong: "Hmong",
  meitei: "ꯃꯤꯇꯩ ꯂꯣꯟ",
  mizo: "Mizo tawng",
  dogri: "डोगरी",
  kashmiri: "کٲشُر",
  konkani: "कोंकणी",
  santali: "ᱥᱟᱱᱛᱟᱲᱤ",
  awadhi: "अवधी",
  marwari: "मारवाड़ी",
  rajasthani: "राजस्थानी",
  garhwali: "गढ़वाली",
  kumaoni: "कुमाऊँनी",
  aramaic: "ܐܪܡܝܐ",
  syriac: "ܣܘܪܝܝܐ",
  coptic: "ⲙⲉⲧⲛ̀ⲕⲏⲙⲉ",
  berber: "Tamaziɣt",
  kabyle: "Taqbaylit",
  quechua: "Runa Simi",
  aymara: "Aymar aru",
  guarani: "Avañe'ẽ",
  nahuatl: "Nāhuatl",
  cherokee: "ᏣᎳᎩ",
  navajo: "Diné bizaad",
  inuktitut: "ᐃᓄᒃᑎᑐᑦ",
  kalaallisut: "Kalaallisut"
};

function getLanguageLabels(language) {
  const nativeLabel = nativeLanguageLabelOverrides[language] || language;
  return { english: language, native: nativeLabel };
}

function buildTop100PerLanguageNames(baseNames, languages) {
  const perLanguageTop100 = baseNames.slice(0, 100);
  const expanded = [];

  for (let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    const labels = getLanguageLabels(language);

    for (let j = 0; j < perLanguageTop100.length; j += 1) {
      const name = perLanguageTop100[j];
      expanded.push(name + " (" + labels.english + ")");

      if (labels.native !== labels.english) {
        expanded.push(name + " (" + labels.native + ")");
      }
    }
  }

  return expanded;
}

function buildTop100FullHeroNamesByLanguage(baseNames, languages) {
  const perLanguageTop100 = baseNames.slice(0, 100);
  const byLanguage = {};

  for (let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    byLanguage[language] = perLanguageTop100.map((name) => name + " (" + language + ")");
  }

  return byLanguage;
}

const defaultFaithWords = { god: "god", prophet: "prophet", saint: "saint" };

const defaultFaithWordsNative = { god: "God", prophet: "Prophet", saint: "Saint" };

const faithWordsByLanguage = Object.fromEntries(
  top200Languages.map((language) => [language, { ...defaultFaithWords }])
);

const faithWordsNativeByLanguage = Object.fromEntries(
  top200Languages.map((language) => [language, { ...defaultFaithWordsNative }])
);

const faithWordOverrides = {
  english: { god: "god", prophet: "prophet", saint: "saint" },
  spanish: { god: "dios", prophet: "profeta", saint: "santo" },
  french: { god: "dieu", prophet: "prophete", saint: "saint" },
  portuguese: { god: "deus", prophet: "profeta", saint: "santo" },
  italian: { god: "dio", prophet: "profeta", saint: "santo" },
  german: { god: "gott", prophet: "prophet", saint: "heiliger" },
  dutch: { god: "god", prophet: "profeet", saint: "heilige" },
  swedish: { god: "gud", prophet: "profet", saint: "helgon" },
  danish: { god: "gud", prophet: "profet", saint: "helgen" },
  norwegian: { god: "gud", prophet: "profet", saint: "helgen" },
  finnish: { god: "jumala", prophet: "profeetta", saint: "pyhimys" },
  russian: { god: "bog", prophet: "prorok", saint: "svyatoy" },
  ukrainian: { god: "boh", prophet: "prorok", saint: "svyatyy" },
  belarusian: { god: "boh", prophet: "prarok", saint: "svyaty" },
  polish: { god: "bog", prophet: "prorok", saint: "swiety" },
  czech: { god: "buh", prophet: "prorok", saint: "svaty" },
  slovak: { god: "boh", prophet: "prorok", saint: "svaty" },
  croatian: { god: "bog", prophet: "prorok", saint: "svetac" },
  serbian: { god: "bog", prophet: "prorok", saint: "svetac" },
  bosnian: { god: "bog", prophet: "poslanik", saint: "svetac" },
  slovenian: { god: "bog", prophet: "prerok", saint: "svetnik" },
  romanian: { god: "dumnezeu", prophet: "profet", saint: "sfant" },
  greek: { god: "theos", prophet: "profitis", saint: "agios" },
  albanian: { god: "zot", prophet: "profet", saint: "shenjt" },
  armenian: { god: "astvats", prophet: "margare", saint: "surb" },
  georgian: { god: "ghmerti", prophet: "tsinasarmetqveli", saint: "tsminda" },
  turkish: { god: "tanri", prophet: "peygamber", saint: "aziz" },
  azerbaijani: { god: "tanri", prophet: "peyghambar", saint: "mugheddes" },
  kazakh: { god: "quday", prophet: "paygambar", saint: "auliye" },
  uzbek: { god: "xudo", prophet: "paygambar", saint: "avliyo" },
  turkmen: { god: "huda", prophet: "paygambar", saint: "ovliya" },
  kyrgyz: { god: "kuday", prophet: "paygambar", saint: "aziz" },
  tajik: { god: "khudo", prophet: "payghambar", saint: "aziz" },
  persian: { god: "khoda", prophet: "payambar", saint: "ghoddous" },
  pashto: { god: "khuday", prophet: "paighambar", saint: "muqaddas" },
  hindi: { god: "bhagwan", prophet: "paigambar", saint: "sant" },
  urdu: { god: "khuda", prophet: "paighambar", saint: "wali" },
  bengali: { god: "ishwar", prophet: "nobi", saint: "santo" },
  marathi: { god: "deva", prophet: "paigambar", saint: "sant" },
  gujarati: { god: "bhagwan", prophet: "paigambar", saint: "sant" },
  punjabi: { god: "waheguru", prophet: "paigambar", saint: "sant" },
  nepali: { god: "bhagwan", prophet: "bhabishyabakta", saint: "sant" },
  sinhala: { god: "deviyan", prophet: "divya vakya vaktaya", saint: "santvaraya" },
  tamil: { god: "kadavul", prophet: "nabi", saint: "punithar" },
  telugu: { god: "devudu", prophet: "pravakta", saint: "pavitrudu" },
  kannada: { god: "devaru", prophet: "pravadi", saint: "pavitra" },
  malayalam: { god: "daivam", prophet: "pravachakan", saint: "vishudhan" },
  odia: { god: "ishwara", prophet: "bhabishyadbakta", saint: "sadhu" },
  assamese: { god: "ishwar", prophet: "bhabishyobakta", saint: "sant" },
  sanskrit: { god: "deva", prophet: "rishi", saint: "sadhu" },
  indonesian: { god: "tuhan", prophet: "nabi", saint: "orang suci" },
  malay: { god: "tuhan", prophet: "nabi", saint: "wali" },
  javanese: { god: "gusti", prophet: "nabi", saint: "wali" },
  sundanese: { god: "gusti", prophet: "nabi", saint: "wali" },
  filipino: { god: "diyos", prophet: "propeta", saint: "santo" },
  tagalog: { god: "diyos", prophet: "propeta", saint: "santo" },
  cebuano: { god: "diyos", prophet: "propeta", saint: "santo" },
  vietnamese: { god: "than", prophet: "nha tien tri", saint: "thanh nhan" },
  thai: { god: "phra chao", prophet: "sattrachari", saint: "nak bun" },
  khmer: { god: "preah", prophet: "phneak tosay", saint: "anak borisot" },
  burmese: { god: "bhuraya", prophet: "anaga", saint: "thadu" },
  lao: { god: "pha chao", prophet: "phu phayakon", saint: "nak bun" },
  korean: { god: "hananim", prophet: "seonjija", saint: "seongin" },
  japanese: { god: "kami", prophet: "yogensha", saint: "seijin" },
  "mandarin chinese": { god: "shen", prophet: "xianzhi", saint: "shengren" },
  "yue chinese": { god: "san", prophet: "sin zi", saint: "sing jan" },
  arabic: { god: "allah", prophet: "nabi", saint: "qiddis" },
  "standard arabic": { god: "allah", prophet: "nabi", saint: "qiddis" },
  "egyptian arabic": { god: "allah", prophet: "nabi", saint: "qiddis" },
  "moroccan arabic": { god: "allah", prophet: "nabi", saint: "qiddis" },
  "algerian arabic": { god: "allah", prophet: "nabi", saint: "qiddis" },
  hebrew: { god: "elohim", prophet: "navi", saint: "kadosh" },
  swahili: { god: "mungu", prophet: "nabii", saint: "mtakatifu" },
  amharic: { god: "egziabher", prophet: "nebiy", saint: "kidus" },
  tigrinya: { god: "egziabher", prophet: "nebiy", saint: "qiddus" },
  somali: { god: "ilaah", prophet: "nabi", saint: "awliyo" },
  hausa: { god: "allah", prophet: "annabi", saint: "waliyi" },
  yoruba: { god: "olorun", prophet: "wolii", saint: "mimo" },
  igbo: { god: "chineke", prophet: "onye amuma", saint: "onye nso" },
  zulu: { god: "unkulunkulu", prophet: "umphrofethi", saint: "ongcwele" },
  xhosa: { god: "uthixo", prophet: "umprofeti", saint: "ongcwele" },
  afrikaans: { god: "god", prophet: "profeet", saint: "heilige" },
  "haitian creole": { god: "bondye", prophet: "pwofet", saint: "sen" },
  catalan: { god: "deu", prophet: "profeta", saint: "sant" },
  galician: { god: "deus", prophet: "profeta", saint: "santo" },
  basque: { god: "jainkoa", prophet: "profeta", saint: "santu" },
  welsh: { god: "duw", prophet: "proffwyd", saint: "sant" },
  irish: { god: "dia", prophet: "fai", saint: "naomh" },
  "scots gaelic": { god: "dia", prophet: "fhaidh", saint: "naomh" },
  icelandic: { god: "gud", prophet: "spamaour", saint: "dyrlingur" },
  maltese: { god: "alla", prophet: "profeta", saint: "qaddis" },
  maori: { god: "atua", prophet: "poropiti", saint: "tapu" },
  hawaiian: { god: "akua", prophet: "kaula", saint: "haipule" },
  samoan: { god: "atua", prophet: "perofeta", saint: "paia" },
  tongan: { god: "otua", prophet: "palofita", saint: "maoni oni" },
  fijian: { god: "kalou", prophet: "parofita", saint: "yalosavasava" }
};

const faithWordNativeOverrides = {
  "mandarin chinese": { god: "神", prophet: "先知", saint: "圣人" },
  hindi: { god: "भगवान", prophet: "पैग़ंबर", saint: "संत" },
  "standard arabic": { god: "الله", prophet: "نبي", saint: "قديس" },
  bengali: { god: "ঈশ্বর", prophet: "নবী", saint: "সন্ত" },
  russian: { god: "Бог", prophet: "Пророк", saint: "Святой" },
  urdu: { god: "خدا", prophet: "پیغمبر", saint: "ولی" },
  japanese: { god: "神", prophet: "預言者", saint: "聖人" },
  marathi: { god: "देव", prophet: "पैगंबर", saint: "संत" },
  telugu: { god: "దేవుడు", prophet: "ప్రవక్త", saint: "సంతుడు" },
  tamil: { god: "கடவுள்", prophet: "தீர்க்கதரிசி", saint: "புனிதர்" },
  korean: { god: "하나님", prophet: "예언자", saint: "성인" },
  persian: { god: "خدا", prophet: "پیامبر", saint: "قدیس" },
  thai: { god: "พระเจ้า", prophet: "ศาสดา", saint: "นักบุญ" },
  gujarati: { god: "ભગવાન", prophet: "પયગંબર", saint: "સંત" },
  amharic: { god: "እግዚአብሔር", prophet: "ነቢይ", saint: "ቅዱስ" },
  "eastern punjabi": { god: "ਵਾਹਿਗੁਰੂ", prophet: "ਪੈਗੰਬਰ", saint: "ਸੰਤ" },
  malayalam: { god: "ദൈവം", prophet: "പ്രവാചകൻ", saint: "വിശുദ്ധൻ" },
  odia: { god: "ଇଶ୍ୱର", prophet: "ଭବିଷ୍ୟଦ୍ବକ୍ତା", saint: "ସନ୍ତ" },
  sindhi: { god: "خدا", prophet: "پيغمبر", saint: "سنت" },
  ukrainian: { god: "Бог", prophet: "Пророк", saint: "Святий" },
  nepali: { god: "भगवान", prophet: "अगमवक्ता", saint: "सन्त" },
  pashto: { god: "خدای", prophet: "پیغمبر", saint: "ولي" },
  kannada: { god: "ದೇವರು", prophet: "ಪ್ರವಾದಿ", saint: "ಸಂತ" },
  assamese: { god: "ঈশ্বৰ", prophet: "ভৱিষ্যদ্বক্তা", saint: "সন্ত" },
  sinhala: { god: "දෙවියන්", prophet: "දූතයා", saint: "සන්ත" },
  khmer: { god: "ព្រះ", prophet: "ព្យាការី", saint: "បរិសុទ្ធ" },
  greek: { god: "Θεός", prophet: "Προφήτης", saint: "Άγιος" },
  hebrew: { god: "אלוהים", prophet: "נביא", saint: "קדוש" },
  armenian: { god: "Աստված", prophet: "Մարգարե", saint: "Սուրբ" },
  georgian: { god: "ღმერთი", prophet: "წინასწარმეტყველი", saint: "წმინდანი" },
  lao: { god: "ພຣະເຈົ້າ", prophet: "ຜູ້ພະຍາກອນ", saint: "ນັກບຸນ" },
  mongolian: { god: "Бурхан", prophet: "Зөнч", saint: "Гэгээнтэн" },
  tigrinya: { god: "እግዚአብሔር", prophet: "ነቢይ", saint: "ቅዱስ" },
  serbian: { god: "Бог", prophet: "Пророк", saint: "Светац" },
  bulgarian: { god: "Бог", prophet: "Пророк", saint: "Светец" },
  belarusian: { god: "Бог", prophet: "Прарок", saint: "Святы" },
  tajik: { god: "Худо", prophet: "Паёмбар", saint: "Муқаддас" },
  kyrgyz: { god: "Кудай", prophet: "Пайгамбар", saint: "Ыйык" },
  kazakh: { god: "Құдай", prophet: "Пайғамбар", saint: "Әулие" },
  uighur: { god: "خۇدا", prophet: "پەيغەمبەر", saint: "مۇقەددەس" },
  tibetan: { god: "ལྷ", prophet: "ལུང་སྟོན་པ", saint: "དམ་པ" },
  meitei: { god: "ꯂꯥꯏ", prophet: "ꯐꯦꯡꯇꯣꯛꯄ", saint: "ꯁꯟꯇ" },
  santali: { god: "ᱵᱷᱟᱜᱣᱟᱱ", prophet: "ᱯᱨᱚᱯᱷᱮᱛ", saint: "ᱥᱟᱱᱛ" },
  cherokee: { god: "ᎤᏃᎯᏳ", prophet: "ᏗᎧᏃᎮᏍᎩ", saint: "ᎤᏙᎯᏳ" },
  inuktitut: { god: "ᐊᖓᔪᖅ", prophet: "ᓇᓗᓇᐃᔨ", saint: "ᐃᓚᒌᔪᖅ" }
};

Object.entries(faithWordOverrides).forEach(([language, words]) => {
  if (faithWordsByLanguage[language]) {
    faithWordsByLanguage[language] = words;
  }
});

Object.entries(faithWordNativeOverrides).forEach(([language, words]) => {
  if (faithWordsNativeByLanguage[language]) {
    faithWordsNativeByLanguage[language] = words;
  }
});

function buildFaithWordTerms(languages, wordMap, nativeWordMap) {
  const terms = [];

  for (let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    const labels = getLanguageLabels(language);
    const words = wordMap[language] || defaultFaithWords;
    const nativeWords = nativeWordMap[language] || words;

    terms.push(words.god, words.prophet, words.saint);
    terms.push(nativeWords.god, nativeWords.prophet, nativeWords.saint);
    terms.push(words.god + " (" + labels.english + ")");
    terms.push(words.prophet + " (" + labels.english + ")");
    terms.push(words.saint + " (" + labels.english + ")");

    if (labels.native !== labels.english) {
      terms.push(words.god + " (" + labels.native + ")");
      terms.push(words.prophet + " (" + labels.native + ")");
      terms.push(words.saint + " (" + labels.native + ")");
      terms.push(nativeWords.god + " (" + labels.native + ")");
      terms.push(nativeWords.prophet + " (" + labels.native + ")");
      terms.push(nativeWords.saint + " (" + labels.native + ")");
    }
  }

  return terms;
}

const top100GoodHeroesEnglish = [
  "Superman (Clark Kent)", "Batman (Bruce Wayne)", "Wonder Woman (Diana Prince)", "The Flash (Barry Allen)", "Green Lantern (Hal Jordan)",
  "Aquaman (Arthur Curry)", "Cyborg (Victor Stone)", "Martian Manhunter (J'onn J'onzz)", "Nightwing (Dick Grayson)", "Robin (Damian Wayne)",
  "Batgirl (Barbara Gordon)", "Supergirl (Kara Zor-El)", "Green Arrow (Oliver Queen)", "Black Canary (Dinah Lance)", "Shazam (Billy Batson)",
  "John Constantine", "Zatanna Zatara", "Hawkman (Carter Hall)", "Hawkgirl (Kendra Saunders)", "Doctor Fate (Kent Nelson)",
  "Iron Man (Tony Stark)", "Captain America (Steve Rogers)", "Thor Odinson", "Hulk (Bruce Banner)", "Black Widow (Natasha Romanoff)",
  "Hawkeye (Clint Barton)", "Spider-Man (Peter Parker)", "Wolverine (Logan)", "Storm (Ororo Munroe)", "Cyclops (Scott Summers)",
  "Jean Grey", "Rogue (Anna Marie)", "Beast (Hank McCoy)", "Nightcrawler (Kurt Wagner)", "Daredevil (Matt Murdock)",
  "Doctor Strange (Stephen Strange)", "Scarlet Witch (Wanda Maximoff)", "Vision", "Ant-Man (Scott Lang)", "Wasp (Hope van Dyne)",
  "Black Panther (T'Challa)", "Captain Marvel (Carol Danvers)", "Falcon (Sam Wilson)", "Winter Soldier (Bucky Barnes)", "Moon Knight (Marc Spector)",
  "She-Hulk (Jennifer Walters)", "Ms. Marvel (Kamala Khan)", "Shang-Chi", "Luke Cage", "Iron Fist (Danny Rand)",
  "Jessica Jones", "Blade (Eric Brooks)", "Silver Surfer (Norrin Radd)", "Nova (Richard Rider)", "Groot", "Star-Lord (Peter Quill)",
  "Gamora", "Drax the Destroyer", "Rocket Raccoon", "Spider-Man (Miles Morales)", "Spider-Gwen (Gwen Stacy)",
  "Elektra Natchios", "Nick Fury", "Agent Phil Coulson", "Hellboy (Anung Un Rama)", "Captain Planet", "The Thing (Ben Grimm)",
  "Invisible Woman (Sue Storm)", "Mr. Fantastic (Reed Richards)", "Human Torch (Johnny Storm)", "Optimus Prime", "Bumblebee", "Link of Hyrule",
  "Princess Zelda", "Mario Mario", "Luigi Mario", "Samus Aran", "Master Chief (John-117)", "Kratos", "Lara Croft", "Geralt of Rivia",
  "Arthur Morgan", "Solid Snake", "R2-D2", "Obi-Wan Kenobi", "Luke Skywalker", "Rey Skywalker", "Ahsoka Tano", "Han Solo", "Princess Leia Organa",
  "Captain Jean-Luc Picard", "Spock", "Captain James T. Kirk", "The Doctor (Doctor Who)", "Harry Potter", "Hermione Granger", "Frodo Baggins", "Aragorn", "Gandalf the Grey", "Katniss Everdeen"
];

const top100GoodProphetSaintGodEnglish = [
  "Jesus Christ", "Virgin Mary", "Saint Joseph", "Prophet Muhammad", "Allah", "Yahweh", "Adonai", "Elohim", "Lord Brahma", "Lord Vishnu",
  "Lord Shiva", "Lord Krishna", "Lord Rama", "Lord Hanuman", "Lord Ganesha", "Goddess Durga", "Goddess Kali", "Goddess Saraswati", "Goddess Lakshmi", "Goddess Parvati",
  "Lord Indra", "Lord Agni", "Lord Varuna", "Lord Yama", "Lord Surya", "Lord Chandra", "Lord Skanda", "Lord Murugan", "Arjuna", "Gautama Buddha",
  "Amitabha Buddha", "Avalokiteshvara", "Guan Yin", "Green Tara", "Manjushri", "Zeus", "Hera", "Poseidon", "Athena", "Apollo",
  "Artemis", "Aphrodite", "Hephaestus", "Hermes", "Demeter", "Hestia", "Dionysus", "Persephone", "Odin", "Thor",
  "Freya", "Freyr", "Tyr", "Baldr", "Heimdall", "Ra", "Osiris", "Isis", "Horus", "Anubis",
  "Ptah", "Amaterasu", "Susanoo", "Inari", "Izanagi", "Izanami", "Quetzalcoatl", "Viracocha", "Inti", "Saint Peter",
  "Saint Paul", "Saint Francis of Assisi", "Saint Anthony of Padua", "Saint Michael the Archangel", "Prophet Moses", "Prophet Abraham", "Prophet Noah", "Prophet Isaiah", "Prophet Jeremiah", "Prophet Ezekiel",
  "Saint Therese of Lisieux", "Saint Augustine of Hippo", "Saint Thomas Aquinas", "Saint Benedict of Nursia", "Saint Patrick", "Saint Nicholas", "Saint George", "Saint Catherine of Alexandria", "Saint Christopher", "Saint Jude",
  "Saint Clare of Assisi", "Saint Monica", "Saint Rita of Cascia", "Saint Lucy", "Saint Sebastian", "Saint John the Apostle", "Saint Mary Magdalene", "Saint Josemaria Escriva", "Saint Maximilian Kolbe", "Saint Padre Pio"
];

const goodHeroEnglishCategoryTerms = top100GoodHeroesEnglish.map((name) => name + " (english)");
const goodProphetSaintGodEnglishCategoryTerms = top100GoodProphetSaintGodEnglish.map((name) => name + " (english)");

const top100GoodHeroesByLanguage = buildTop100FullHeroNamesByLanguage(top100GoodHeroesEnglish, top200Languages);

const heroGoodGuyNames = [
  ...Object.values(top100GoodHeroesByLanguage).flat()
];

const saintOrGodNames = [
  ...top100GoodProphetSaintGodEnglish,
  ...goodProphetSaintGodEnglishCategoryTerms,
  ...buildTop100PerLanguageNames(top100GoodProphetSaintGodEnglish, top200Languages)
];

const faithWordTerms = buildFaithWordTerms(top200Languages, faithWordsByLanguage, faithWordsNativeByLanguage);
const faithOverrideTerms = [...top100GoodProphetSaintGodEnglish, ...faithWordTerms]
  .map((value) => value.toLowerCase());

const overrideTerms = [
  ...overrideKeywordPhrases,
  ...heroGoodGuyNames,
  ...saintOrGodNames,
  ...faithWordTerms
].map((value) => value.toLowerCase());

const moodClasses = [
  "mood-sad", "mood-happy", "mood-laugh", "mood-love", "mood-wink", "mood-angry",
  "mood-neutral", "mood-surprised", "mood-shocked", "mood-cry", "mood-thinking",
  "mood-sleepy", "mood-fear", "mood-mask", "mood-dizzy", "mood-cool", "mood-kiss",
  "mood-tongue", "mood-party", "mood-dead"
];

const accentClasses = [
  "accent-soft", "accent-big", "accent-smirk", "accent-uneasy", "accent-blank", "accent-think",
  "accent-tongue", "accent-rolling", "accent-cry", "accent-fear", "accent-hot", "accent-cold",
  "accent-party", "accent-halo", "accent-love", "accent-money", "accent-melt", "accent-dead",
  "accent-alien", "accent-robot", "accent-dizzy", "accent-cool", "accent-sad", "accent-mask", "accent-angry", "accent-upside"
];

const eyeDetailClasses = ["eyes-dot", "eyes-wide", "eyes-closed", "eyes-x", "eyes-squint"];
const mouthDetailClasses = ["mouth-smile", "mouth-frown", "mouth-open", "mouth-grin", "mouth-kiss", "mouth-zigzag"];
const browDetailClasses = ["brow-furrow", "brow-raised", "brow-worried", "brow-tilt"];
const extraDetailClasses = ["extra-none", "extra-sweat", "extra-tears", "extra-stars", "extra-halo", "extra-mask", "extra-money", "extra-tongue", "extra-sweat-tear"];

const supportedSet = new Set(supportedSmileys.map((emoji) => normalizeEmoji(emoji)));
const emojiProfiles = new Map(
  profileEntries.map(([emoji, mood, accent]) => [normalizeEmoji(emoji), { mood, accent }])
);

const segmenter = typeof Intl !== "undefined" && Intl.Segmenter
  ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
  : null;
const expectedSupportedEmojiCount = 129;
const supportedByLength = Array.from(supportedSet).sort((a, b) => b.length - a.length);

let cycleTimer = null;
let isThemeAuto = true;
let lastNonMonoThemeClass = "theme-color";

const systemThemeMedia = typeof window !== "undefined" && typeof window.matchMedia === "function"
  ? window.matchMedia("(prefers-color-scheme: dark)")
  : null;

syncSeoUrlMeta();
applyAutomaticTheme();

if (systemThemeMedia) {
  if (typeof systemThemeMedia.addEventListener === "function") {
    systemThemeMedia.addEventListener("change", () => {
      applyAutomaticTheme();
    });
  } else if (typeof systemThemeMedia.addListener === "function") {
    systemThemeMedia.addListener(() => {
      applyAutomaticTheme();
    });
  }
}

if (inputEl && faceEl && statusEl) {
  if (!inputEl.value.trim()) {
    clearFace();
  }

  inputEl.addEventListener("input", () => {
    if (!inputEl.value.trim()) {
      stopCycle();
      clearFace();
      statusEl.textContent = "";
      return;
    }

    runMimic(inputEl.value);
  });
}

if (themeToggleEl) {
  themeToggleEl.addEventListener("click", () => {
    isThemeAuto = false;
    const isMono = document.body.classList.contains("theme-mono");

    if (isMono) {
      document.body.classList.remove("theme-mono");
      document.body.removeAttribute("data-mono-base");
    } else {
      const baseThemeClass = getSystemPreferredThemeClass();

      lastNonMonoThemeClass = baseThemeClass;
      setThemeClass(baseThemeClass);

      const monoBase = baseThemeClass === "theme-color" ? "dark" : "light";
      document.body.classList.add("theme-mono");
      document.body.setAttribute("data-mono-base", monoBase);
    }

    syncThemeToggleLabel();
  });
}

function applyAutomaticTheme() {
  if (!isThemeAuto) {
    return;
  }

  setThemeClass(getSystemPreferredThemeClass());
}

function getSystemPreferredThemeClass() {
  if (systemThemeMedia) {
    return systemThemeMedia.matches ? "theme-color" : "theme-light";
  }

  return document.body.classList.contains("theme-color") ? "theme-color" : "theme-light";
}

function setThemeClass(themeClass) {
  lastNonMonoThemeClass = themeClass;
  document.body.classList.remove("theme-color", "theme-light");
  document.body.classList.add(themeClass);

  if (document.body.classList.contains("theme-mono")) {
    const monoBase = themeClass === "theme-light" ? "light" : "dark";
    document.body.setAttribute("data-mono-base", monoBase);
  }

  syncThemeToggleLabel();
}

function syncThemeToggleLabel() {
  if (!themeToggleEl) {
    return;
  }

  if (document.body.classList.contains("theme-mono")) {
    themeToggleEl.textContent = "Color";
    themeToggleEl.setAttribute("aria-label", "Switch to color theme");
    return;
  }

  themeToggleEl.textContent = "Monochrome";
  themeToggleEl.setAttribute("aria-label", "Switch to monochrome theme");
}

function syncSeoUrlMeta() {
  const canonicalUrl = getCanonicalUrl();
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  const ogUrlEl = document.querySelector('meta[property="og:url"]');
  const twitterUrlEl = document.querySelector('meta[name="twitter:url"]');

  if (canonicalEl) {
    canonicalEl.setAttribute("href", canonicalUrl);
  }

  if (ogUrlEl) {
    ogUrlEl.setAttribute("content", canonicalUrl);
  }

  if (twitterUrlEl) {
    twitterUrlEl.setAttribute("content", canonicalUrl);
  }
}

function getCanonicalUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  url.search = "";
  return url.toString();
}

function runMimic(inputText) {
  const trimmedInput = inputText.trim();

  if (hasFaithWordOverride(trimmedInput) || hasOriginalFaceOverride(trimmedInput)) {
    stopCycle();
    showOriginalSadMac();
    return;
  }

  hideOriginalSadMac();

  if (!trimmedInput) {
    stopCycle();
    clearFace();
    statusEl.textContent = "";
    return;
  }

  const matches = findSupportedEmojis(inputText);

  if (matches.length === 0) {
    stopCycle();
    return;
  }

  const profiles = matches.map((emoji) => {
    const normalized = normalizeEmoji(emoji);
    const base = emojiProfiles.get(normalized) || { mood: "neutral", accent: "blank" };
    return {
      emoji,
      profile: {
        ...base,
        ...buildDetailProfile(normalized, base)
      }
    };
  });

  if (profiles.length === 1) {
    stopCycle();
    applyExpression(profiles[0].profile);
    statusEl.textContent = "";
    return;
  }

  startCycle(profiles);
}

function startCycle(profiles) {
  stopCycle();

  let index = 0;
  applyExpression(profiles[0].profile);
  statusEl.textContent = "";

  cycleTimer = setInterval(() => {
    index = (index + 1) % profiles.length;
    applyExpression(profiles[index].profile);
  }, 1000);
}

function stopCycle() {
  if (cycleTimer !== null) {
    clearInterval(cycleTimer);
    cycleTimer = null;
  }
}

function applyExpression(expression) {
  const moodClass = "mood-" + expression.mood;
  const accentClass = "accent-" + expression.accent;

  faceEl.classList.remove("is-blank");
  moodClasses.forEach((className) => faceEl.classList.remove(className));
  accentClasses.forEach((className) => faceEl.classList.remove(className));
  eyeDetailClasses.forEach((className) => faceEl.classList.remove(className));
  mouthDetailClasses.forEach((className) => faceEl.classList.remove(className));
  browDetailClasses.forEach((className) => faceEl.classList.remove(className));
  extraDetailClasses.forEach((className) => faceEl.classList.remove(className));

  faceEl.classList.add(moodClass);
  faceEl.classList.add(accentClass);
  faceEl.classList.add(expression.eyes || "eyes-dot");
  faceEl.classList.add(expression.mouth || "mouth-smile");
  faceEl.classList.add(expression.brow || "brow-raised");
  faceEl.classList.add(expression.extra || "extra-none");
}

function clearFace() {
  hideOriginalSadMac();
  moodClasses.forEach((className) => faceEl.classList.remove(className));
  accentClasses.forEach((className) => faceEl.classList.remove(className));
  eyeDetailClasses.forEach((className) => faceEl.classList.remove(className));
  mouthDetailClasses.forEach((className) => faceEl.classList.remove(className));
  browDetailClasses.forEach((className) => faceEl.classList.remove(className));
  extraDetailClasses.forEach((className) => faceEl.classList.remove(className));
  faceEl.classList.add("is-blank");
}

function hasOriginalFaceOverride(text) {
  if (!text) {
    return false;
  }

  const lowerText = text.toLowerCase();
  return overrideTerms.some((term) => lowerText.includes(term));
}

function hasFaithWordOverride(text) {
  if (!text) {
    return false;
  }

  const lowerText = text.toLowerCase();
  return faithOverrideTerms.some((term) => lowerText.includes(term));
}

function showOriginalSadMac() {
  if (sadMacEl) {
    sadMacEl.classList.add("show-original");
  }
}

function hideOriginalSadMac() {
  if (sadMacEl) {
    sadMacEl.classList.remove("show-original");
  }
}

function buildDetailProfile(emoji, base) {
  const defaultByMood = {
    happy: { eyes: "eyes-dot", mouth: "mouth-smile", brow: "brow-raised", extra: "extra-none" },
    laugh: { eyes: "eyes-squint", mouth: "mouth-grin", brow: "brow-raised", extra: "extra-none" },
    love: { eyes: "eyes-dot", mouth: "mouth-smile", brow: "brow-raised", extra: "extra-none" },
    wink: { eyes: "eyes-squint", mouth: "mouth-smile", brow: "brow-tilt", extra: "extra-none" },
    tongue: { eyes: "eyes-dot", mouth: "mouth-kiss", brow: "brow-raised", extra: "extra-tongue" },
    cool: { eyes: "eyes-squint", mouth: "mouth-smile", brow: "brow-raised", extra: "extra-none" },
    surprised: { eyes: "eyes-wide", mouth: "mouth-open", brow: "brow-raised", extra: "extra-none" },
    shocked: { eyes: "eyes-wide", mouth: "mouth-open", brow: "brow-worried", extra: "extra-none" },
    sad: { eyes: "eyes-dot", mouth: "mouth-frown", brow: "brow-worried", extra: "extra-none" },
    cry: { eyes: "eyes-dot", mouth: "mouth-frown", brow: "brow-worried", extra: "extra-none" },
    angry: { eyes: "eyes-dot", mouth: "mouth-zigzag", brow: "brow-furrow", extra: "extra-none" },
    neutral: { eyes: "eyes-dot", mouth: "mouth-zigzag", brow: "brow-tilt", extra: "extra-none" },
    thinking: { eyes: "eyes-dot", mouth: "mouth-zigzag", brow: "brow-tilt", extra: "extra-none" },
    sleepy: { eyes: "eyes-closed", mouth: "mouth-zigzag", brow: "brow-raised", extra: "extra-none" },
    fear: { eyes: "eyes-wide", mouth: "mouth-open", brow: "brow-worried", extra: "extra-none" },
    mask: { eyes: "eyes-closed", mouth: "mouth-zigzag", brow: "brow-worried", extra: "extra-none" },
    dizzy: { eyes: "eyes-x", mouth: "mouth-zigzag", brow: "brow-tilt", extra: "extra-none" },
    party: { eyes: "eyes-dot", mouth: "mouth-smile", brow: "brow-raised", extra: "extra-none" },
    kiss: { eyes: "eyes-closed", mouth: "mouth-kiss", brow: "brow-raised", extra: "extra-none" },
    dead: { eyes: "eyes-x", mouth: "mouth-zigzag", brow: "brow-tilt", extra: "extra-none" }
  };

  const detail = { ...(defaultByMood[base.mood] || defaultByMood.neutral) };

  const override = {
    "😀": { mouth: "mouth-smile" },
    "😁": { mouth: "mouth-grin" },
    "😂": { mouth: "mouth-grin", extra: "extra-tears" },
    "🤣": { mouth: "mouth-grin", extra: "extra-tears" },
    "😅": { mouth: "mouth-smile", extra: "extra-sweat" },
    "😉": { eyes: "eyes-squint", brow: "brow-tilt" },
    "😍": { eyes: "eyes-wide", extra: "extra-none" },
    "🥰": { eyes: "eyes-wide", mouth: "mouth-smile", extra: "extra-stars" },
    "😘": { mouth: "mouth-kiss", extra: "extra-none" },
    "🤔": { brow: "brow-tilt", mouth: "mouth-zigzag" },
    "🙄": { eyes: "eyes-wide", brow: "brow-tilt" },
    "😐": { eyes: "eyes-dot", mouth: "mouth-zigzag", brow: "brow-tilt", extra: "extra-none" },
    "😋": { eyes: "eyes-dot", mouth: "mouth-kiss", brow: "brow-raised", extra: "extra-tongue" },
    "😬": { mouth: "mouth-zigzag" },
    "😷": { extra: "extra-mask" },
    "🤒": { extra: "extra-mask" },
    "🤕": { extra: "extra-mask" },
    "🤢": { extra: "extra-mask" },
    "🤮": { extra: "extra-mask" },
    "🤧": { extra: "extra-mask" },
    "🤑": { extra: "extra-money", mouth: "mouth-grin" },
    "😇": { extra: "extra-halo" },
    "🥳": { extra: "extra-stars", mouth: "mouth-smile" },
    "🤩": { extra: "extra-stars", mouth: "mouth-smile" },
    "🥵": { extra: "extra-sweat" },
    "🥶": { extra: "extra-sweat" },
    "😓": { extra: "extra-sweat" },
    "😥": { extra: "extra-sweat" },
    "😰": { extra: "extra-sweat" },
    "😭": { extra: "extra-tears", mouth: "mouth-frown" },
    "😱": { eyes: "eyes-wide", mouth: "mouth-open", extra: "extra-sweat" },
    "😨": { eyes: "eyes-wide", mouth: "mouth-open", extra: "extra-sweat" },
    "🤯": { eyes: "eyes-wide", mouth: "mouth-open", extra: "extra-stars" },
    "🤪": { eyes: "eyes-x", extra: "extra-stars" },
    "😵": { eyes: "eyes-x", extra: "extra-stars" },
    "😵‍💫": { eyes: "eyes-x", extra: "extra-stars" },
    "🥱": { eyes: "eyes-closed", mouth: "mouth-open", extra: "extra-none" },
    "🙃": { eyes: "eyes-dot", mouth: "mouth-frown", brow: "brow-raised" },
    "💩": { eyes: "eyes-dot", mouth: "mouth-zigzag", extra: "extra-none" },
    "💀": { eyes: "eyes-x", mouth: "mouth-zigzag" },
    "☠️": { eyes: "eyes-x", mouth: "mouth-zigzag" },
    "🎃": { eyes: "eyes-wide", mouth: "mouth-grin", extra: "extra-none" },
    "🙈": { eyes: "eyes-closed", mouth: "mouth-smile", extra: "extra-none" },
    "🙉": { eyes: "eyes-closed", mouth: "mouth-smile", extra: "extra-none" },
    "🙊": { eyes: "eyes-dot", mouth: "mouth-zigzag", extra: "extra-none" },
    "🤖": { eyes: "eyes-wide", mouth: "mouth-zigzag", extra: "extra-none" },
    "💋": { eyes: "eyes-closed", mouth: "mouth-kiss", extra: "extra-none" },
    "💌": { eyes: "eyes-dot", mouth: "mouth-kiss", extra: "extra-none" }
  }[emoji];

  if (override) {
    return { ...detail, ...override };
  }

  return detail;
}

function findSupportedEmojis(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return [];
  }

  if (segmenter) {
    const graphemes = Array.from(segmenter.segment(trimmed), (entry) => entry.segment);
    return graphemes.filter((grapheme) => supportedSet.has(normalizeEmoji(grapheme)));
  }

  // Fallback parser for browsers without Intl.Segmenter.
  // It greedily matches known emojis (including ZWJ sequences) so entries such as 😵‍💫 and 😶‍🌫️ are detected reliably.
  return scanSupportedEmojis(trimmed);
}

function scanSupportedEmojis(text) {
  const normalizedText = normalizeEmoji(text);
  const matches = [];
  let i = 0;

  while (i < normalizedText.length) {
    let matched = "";

    for (const emoji of supportedByLength) {
      if (normalizedText.startsWith(emoji, i)) {
        matched = emoji;
        break;
      }
    }

    if (matched) {
      matches.push(matched);
      i += matched.length;
      continue;
    }

    const codePoint = normalizedText.codePointAt(i);
    i += codePoint > 0xffff ? 2 : 1;
  }

  return matches;
}

function normalizeEmoji(emoji) {
  return emoji.replace(/\uFE0F/g, "");
}

const missingProfiles = Array.from(supportedSet).filter((emoji) => !emojiProfiles.has(emoji));

if (missingProfiles.length > 0 && statusEl) {
  statusEl.textContent = "Emoji profile map is incomplete. Please refresh after updating script mapping.";
}

if (supportedSet.size !== expectedSupportedEmojiCount && statusEl) {
  statusEl.textContent = "Supported emoji list count is not 119. Please verify the first 119 browser emoji entries.";
}
