"use strict";

// 1.Створити сторінку, що показує нумерований список пісень:

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const main = document.querySelector("#main");
const list = document.createElement("ol");
const markupItem = playList
  .map(
    (element) =>
      `<li class="play-list__item">Пісня: '${element.song.toLocaleLowerCase()}', Автор: '${element.author.toLocaleLowerCase()}'.</li>`
  )
  .join("");

main.prepend(list);
list.insertAdjacentHTML("afterbegin", markupItem);
