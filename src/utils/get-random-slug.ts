const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomSlug = () => {
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
