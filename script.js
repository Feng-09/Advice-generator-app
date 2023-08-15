"use strict";

let id = document.getElementById("id");
let deep = document.getElementById("advice");
let btn = document.querySelector("button");

const advice = async () => {
  const get = await fetch("https://api.adviceslip.com/advice");
  const data = await get.json();
  id.innerHTML = data.slip.id;
  deep.innerHTML = data.slip.advice;
};

btn.addEventListener("click", advice);

advice();
