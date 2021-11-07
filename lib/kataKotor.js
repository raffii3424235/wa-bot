const sastrawi = require("sastrawijs");

const kataKasar = [
  "kontol",
  "memek",
  "jembut",
  "kntl",
  "mmk",
  "mmek",
  "memk",
  "mmx",
  "jmbt",
  "jembt",
  "jmbut",
  "titid",
  "tytyd",
  "titit",
  "ttd",
  "tytd",
  "titd",
];

const inArray = (needle, haystack) => {
  let length = haystack.length;
  for (let i = 0; i < length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
};

module.exports = cariKasar = (kata) =>
  new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
      if (inArray(stemmer.stem(word), kataKasar)) {
        resolve(true);
      }
    }
    resolve(false);
  });
