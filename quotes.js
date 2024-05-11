const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma",
    author: 'Steve Jobs',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author: 'Oprah Winfrey',
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    author: 'John Lennon',
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
  {
    quote: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Do one thing every day that scares you. ',
    author: 'Eleanor Roosevelt',
  },
];
const randomNumber = Math.floor(Math.random() * quotes.length); // 0~9

const quote = document.querySelector('#quote span:first-child');

const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[randomNumber];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
