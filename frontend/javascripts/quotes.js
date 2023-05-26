const quotes = [
  // 1[0]
  {
    quote: "The man is my favorites",
    auther: "sexy girls",
  },
  // 2[1]
  {
    quote: "Kawaii!!",
    auther: "ohoht",
  },
  // 3[2]
  {
    quote: "i want you, babe",
    auther: "johnna",
  },
  // 4[3]
  {
    quote: "You can fcumke, sexy rady!",
    auther: "Extra hots",
  },
  // 5[4]
  {
    quote: "Least common multiple of 36 and 16 is 144",
    auther: "new-U-turn",
  },
  // 6[5]
  {
    quote: "siuuuuuuuuuu!!!!",
    auther: "Korean-Ronaldo",
  },
  // 7[6]
  {
    quote: "ahaangggggg",
    auther: "ahri-dead",
  },
  // 8[7]
  {
    quote: "kick-back",
    auther: "back-kick",
  },
  // 9[8]
  {
    quote: "suck it hard, ohps, I mean icecream, guys, what's you've though?",
    auther: "_in-fact, i mean....... yeah..... you know it...",
  },
  // 10[9]
  {
    quote: "ang ang ang aang agn , aghjhagnagnangna1111",
    auther: "-ahri-interested",
  },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = `-${todaysQuote.auther}`;
