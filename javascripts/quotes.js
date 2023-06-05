const quotes = [
  // 1[0]
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    auther: "Benjamin Franklin",
  },
  // 2[1]
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    auther: "Helen Keller",
  },
  // 3[2]
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    auther: "Mother Teresa",
  },
  // 4[3]
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    auther: "Franklin D. Roosevelt",
  },
  // 5[4]
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    auther: "Thomas A. Edison",
  },
  // 6[5]
  {
    quote: "The way to get started is to quit talking and begin doing.",
    auther: "Walt Disney",
  },
  // 7[6]
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    auther: "Steve Jobs",
  },
  // 8[7]
  {
    quote:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    auther: "Barack Obama",
  },
  // 9[8]
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    auther: "Henry Ford",
  },
  // 10[9]
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    auther: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = `-${todaysQuote.auther}`;
