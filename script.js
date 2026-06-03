const supportedSmileys = [
  "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
  "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤩",
  "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮",
  "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤",
  "😒", "😓", "😔", "😕", "🙃", "🫠", "🤑", "😲", "☹️", "🙁",
  "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩",
  "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫",
  "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇",
  "🥳", "🥴", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🫢", "🫣",
  "🫡", "🤓", "🧐", "😈", "👿", "👹", "👺", "💀", "☠️", "👻",
  "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀",
  "😿", "😾", "🫤", "🫥", "🫨", "🥸", "☺️", "😮‍💨", "😶‍🌫️"
];

const profileEntries = [
  ["😀", "happy", "soft"], ["😁", "happy", "big"], ["😂", "laugh", "big"], ["🤣", "laugh", "big"], ["😃", "happy", "soft"],
  ["😄", "happy", "soft"], ["😅", "laugh", "uneasy"], ["😆", "laugh", "big"], ["😉", "wink", "soft"], ["😊", "happy", "soft"],
  ["😋", "tongue", "tongue"], ["😎", "cool", "cool"], ["😍", "love", "love"], ["😘", "kiss", "love"], ["😗", "kiss", "soft"],
  ["😙", "kiss", "soft"], ["😚", "kiss", "soft"], ["🙂", "happy", "soft"], ["🤗", "party", "party"], ["🤩", "party", "party"],
  ["🤔", "thinking", "think"], ["🤨", "thinking", "think"], ["😐", "neutral", "blank"], ["😑", "neutral", "blank"], ["😶", "neutral", "blank"],
  ["🙄", "thinking", "rolling"], ["😏", "neutral", "smirk"], ["😣", "sad", "uneasy"], ["😥", "cry", "cry"], ["😮", "surprised", "soft"],
  ["🤐", "neutral", "mask"], ["😯", "surprised", "soft"], ["😪", "sleepy", "blank"], ["😫", "sad", "uneasy"], ["😴", "sleepy", "blank"],
  ["😌", "sleepy", "soft"], ["😛", "tongue", "tongue"], ["😜", "wink", "tongue"], ["😝", "tongue", "tongue"], ["🤤", "dizzy", "uneasy"],
  ["😒", "neutral", "smirk"], ["😓", "fear", "fear"], ["😔", "sad", "sad"], ["😕", "sad", "sad"], ["🙃", "sad", "upside"],
  ["🫠", "sad", "melt"], ["🤑", "party", "money"], ["😲", "surprised", "soft"], ["☹️", "sad", "sad"], ["🙁", "sad", "sad"],
  ["😖", "sad", "uneasy"], ["😞", "sad", "sad"], ["😟", "sad", "sad"], ["😤", "angry", "angry"], ["😢", "cry", "cry"],
  ["😭", "cry", "cry"], ["😦", "fear", "fear"], ["😧", "fear", "fear"], ["😨", "fear", "fear"], ["😩", "sad", "uneasy"],
  ["🤯", "shocked", "hot"], ["😬", "shocked", "uneasy"], ["😰", "fear", "fear"], ["😱", "shocked", "fear"], ["🥵", "shocked", "hot"],
  ["🥶", "shocked", "cold"], ["😳", "surprised", "hot"], ["🤪", "dizzy", "dizzy"], ["😵", "shocked", "dizzy"], ["😵‍💫", "shocked", "dizzy"],
  ["😡", "angry", "angry"], ["😠", "angry", "angry"], ["🤬", "angry", "angry"], ["😷", "mask", "mask"], ["🤒", "mask", "hot"],
  ["🤕", "mask", "uneasy"], ["🤢", "mask", "uneasy"], ["🤮", "mask", "uneasy"], ["🤧", "mask", "cold"], ["😇", "happy", "halo"],
  ["🥳", "party", "party"], ["🥴", "dizzy", "dizzy"], ["🥺", "sad", "soft"], ["🤠", "happy", "soft"], ["🤡", "kiss", "party"],
  ["🤥", "neutral", "smirk"], ["🤫", "neutral", "blank"], ["🤭", "neutral", "soft"], ["🫢", "surprised", "blank"], ["🫣", "fear", "blank"],
  ["🫡", "neutral", "soft"], ["🤓", "cool", "cool"], ["🧐", "thinking", "think"], ["😈", "angry", "angry"], ["👿", "angry", "angry"],
  ["👹", "angry", "angry"], ["👺", "angry", "angry"], ["💀", "dead", "dead"], ["☠️", "dead", "dead"], ["👻", "dead", "soft"],
  ["👽", "dead", "alien"], ["👾", "dead", "robot"], ["🤖", "dead", "robot"], ["😺", "happy", "soft"], ["😸", "happy", "big"],
  ["😹", "laugh", "big"], ["😻", "love", "love"], ["😼", "neutral", "smirk"], ["😽", "kiss", "love"], ["🙀", "shocked", "fear"],
  ["😿", "cry", "cry"], ["😾", "angry", "angry"], ["🫤", "sad", "smirk"], ["🫥", "neutral", "blank"], ["🫨", "shocked", "dizzy"],
  ["🥸", "cool", "cool"], ["☺️", "happy", "soft"], ["😮‍💨", "sleepy", "soft"], ["😶‍🌫️", "sleepy", "blank"]
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

const heroGoodGuyNames = [
  "superman", "batman", "wonder woman", "flash", "green lantern", "aquaman", "cyborg", "martian manhunter", "nightwing", "robin",
  "batgirl", "supergirl", "green arrow", "black canary", "shazam", "constantine", "zatanna", "hawkman", "hawkgirl", "doctor fate",
  "iron man", "captain america", "thor", "hulk", "black widow", "hawkeye", "spider-man", "wolverine", "storm", "cyclops",
  "jean grey", "rogue", "beast", "nightcrawler", "daredevil", "doctor strange", "scarlet witch", "vision", "ant-man", "wasp",
  "black panther", "captain marvel", "falcon", "winter soldier", "moon knight", "she-hulk", "ms marvel", "shang-chi", "luke cage", "iron fist",
  "jessica jones", "punisher", "blade", "ghost rider", "silver surfer", "nova", "groot", "star-lord", "gamora", "drax",
  "rocket", "miles morales", "spider-gwen", "deadpool", "elektra", "nick fury", "agent coulson", "hellboy", "spawn", "judge dredd",
  "optimus prime", "bumblebee", "link", "zelda", "mario", "luigi", "samus", "master chief", "kratos", "lara croft",
  "geralt", "arthur morgan", "solid snake", "r2-d2", "obi-wan", "luke skywalker", "rey", "anakin", "ahsoka", "han solo",
  "leia", "captain picard", "spock", "kirk", "doctor who", "harry potter", "hermione", "frodo", "aragorn", "gandalf"
];

const saintOrGodNames = [
  "jesus", "mary", "joseph", "muhammad", "allah", "yahweh", "adonai", "elohim", "brahma", "vishnu",
  "shiva", "krishna", "rama", "hanuman", "ganesha", "durga", "kali", "saraswati", "lakshmi", "parvati",
  "indra", "agni", "varuna", "yama", "surya", "chandra", "skanda", "murugan", "arjuna", "buddha",
  "amitabha", "avalokiteshvara", "guan yin", "tara", "manjushri", "zeus", "hera", "poseidon", "hades", "athena",
  "apollo", "artemis", "ares", "aphrodite", "hephaestus", "hermes", "demeter", "hestia", "dionysus", "persephone",
  "odin", "thor", "loki", "freya", "freyr", "tyr", "baldr", "heimdall", "ra", "osiris",
  "isis", "horus", "anubis", "set", "ptah", "amaterasu", "susanoo", "inari", "izanagi", "izanami",
  "quetzalcoatl", "tezcatlipoca", "huitzilopochtli", "viracocha", "inti", "saint peter", "saint paul", "saint francis", "saint anthony", "saint michael",
  "saint therese", "saint augustine", "saint thomas", "saint benedict", "saint patrick", "saint nicholas", "saint george", "saint catherine", "saint christopher", "saint jude",
  "saint clare", "saint monica", "saint rita", "saint lucy", "saint sebastian", "saint john", "saint mary magdalene", "saint josemaria", "saint maximilian", "saint padre pio"
];

const overrideTerms = [
  ...overrideKeywordPhrases,
  ...heroGoodGuyNames,
  ...saintOrGodNames
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

let cycleTimer = null;

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
    const isMono = document.body.classList.contains("theme-mono");

    if (isMono) {
      document.body.classList.remove("theme-mono");
      document.body.classList.add("theme-color");
      themeToggleEl.textContent = "Monochrome";
      themeToggleEl.setAttribute("aria-label", "Switch to monochrome theme");
    } else {
      document.body.classList.remove("theme-color");
      document.body.classList.add("theme-mono");
      themeToggleEl.textContent = "Color";
      themeToggleEl.setAttribute("aria-label", "Switch to color theme");
    }
  });
}

function runMimic(inputText) {
  const trimmedInput = inputText.trim();

  if (hasOriginalFaceOverride(trimmedInput)) {
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
    "😘": { mouth: "mouth-kiss", extra: "extra-none" },
    "🤔": { brow: "brow-tilt", mouth: "mouth-zigzag" },
    "🙄": { eyes: "eyes-wide", brow: "brow-tilt" },
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
    "🙃": { eyes: "eyes-dot", mouth: "mouth-frown", brow: "brow-raised" },
    "💀": { eyes: "eyes-x", mouth: "mouth-zigzag" },
    "☠️": { eyes: "eyes-x", mouth: "mouth-zigzag" },
    "🤖": { eyes: "eyes-wide", mouth: "mouth-zigzag", extra: "extra-none" }
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

  const graphemes = segmenter
    ? Array.from(segmenter.segment(trimmed), (entry) => entry.segment)
    : Array.from(trimmed);

  return graphemes.filter((grapheme) => supportedSet.has(normalizeEmoji(grapheme)));
}

function normalizeEmoji(emoji) {
  return emoji.replace(/\uFE0F/g, "");
}

if (emojiProfiles.size !== supportedSet.size) {
  statusEl.textContent = "Emoji profile map is incomplete. Please refresh after updating script mapping.";
}
