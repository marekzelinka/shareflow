import { format } from "date-fns";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatDate = (value) => {
  return format(new Date(value), "MMMM d, yyyy 'at' p");
};

export const generateSlug = () => {
  const adverbs = [
    "bold",
    "bravel",
    "bright",
    "cheerfull",
    "devoted",
    "eager",
    "elegant",
    "fortunate",
    "gleefull",
    "gracefull",
    "happy",
    "honest",
    "innocent",
    "just",
    "kind",
    "obedient",
    "perfect",
    "polite",
    "powerfull",
    "safe",
    "victorious",
    "warm",
    "vivacious",
  ];

  const nouns = [
    "people",
    "way",
    "art",
    "world",
    "information",
    "health",
    "system",
    "computer",
    "music",
    "person",
    "method",
    "data",
    "understanding",
    "theory",
    "literature",
    "software",
    "knowledge",
    "appearance",
    "concept",
    "customer",
    "advice",
    "expression",
    "importance",
    "opinion",
    "apple",
    "place",
    "number",
    "part",
    "field",
  ];

  const adverb = adverbs[getRandomNumber(0, adverbs.length + 1)];
  const noun = nouns[getRandomNumber(0, nouns.length + 1)];
  const randomNumber = getRandomNumber(1000, 3000);

  return `${adverb}-${noun}-${randomNumber}`;
};

export const isValidUrl = (string) => {
  const validUrlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  return Boolean(validUrlPattern.test(string));
};

// https://gist.github.com/mathewbyrne/1280286#gistcomment-3753527
export const slugify = (text, separator) => {
  const sets = [
    { to: "a", from: "[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]" },
    { to: "ae", from: "[Ä]" },
    { to: "c", from: "[ÇĆĈČ]" },
    { to: "d", from: "[ÐĎĐÞ]" },
    { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
    { to: "g", from: "[ĜĞĢǴ]" },
    { to: "h", from: "[ĤḦ]" },
    { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
    { to: "j", from: "[Ĵ]" },
    { to: "ij", from: "[Ĳ]" },
    { to: "k", from: "[Ķ]" },
    { to: "l", from: "[ĹĻĽŁ]" },
    { to: "m", from: "[Ḿ]" },
    { to: "n", from: "[ÑŃŅŇ]" },
    { to: "o", from: "[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
    { to: "oe", from: "[ŒÖ]" },
    { to: "p", from: "[ṕ]" },
    { to: "r", from: "[ŔŖŘ]" },
    { to: "s", from: "[ŚŜŞŠ]" },
    { to: "ss", from: "[ß]" },
    { to: "t", from: "[ŢŤ]" },
    { to: "u", from: "[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
    { to: "ue", from: "[Ü]" },
    { to: "w", from: "[ẂŴẀẄ]" },
    { to: "x", from: "[ẍ]" },
    { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
    { to: "z", from: "[ŹŻŽ]" },
    { to: "-", from: "[·/_,:;']" },
  ];

  text = text.toString().toLowerCase().trim();

  sets.forEach((set) => {
    text = text.replace(new RegExp(set.from, "gi"), set.to);
  });

  text = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

  if (typeof separator !== "undefined" && separator !== "-") {
    text = text.replace(/-/g, separator);
  }

  return text;
};
