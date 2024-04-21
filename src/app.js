/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("btn").onclick = function() {
    let person = ["my cat", "my daughter", "my dog", "an alien"];
    let action = ["play outside", "fell in water", "destroyed my ", "stole my"];
    let posession = ["car", "phone", "house", "clothes", "laptop"];
    let time = [
      "before i could leave",
      "when i walk outside",
      "on my way to class",
      "on my way to work"
    ];

    let randomIdx = Math.floor(Math.random() * person.length);
    let perIndxR = person[randomIdx];
    let actIndxR = action[Math.floor(Math.random() * action.length)];
    let posIndexR = posession[Math.floor(Math.random() * posession.length)];
    let timIndexR = time[Math.floor(Math.random() * time.length)];

    document.getElementById(
      "excuse"
    ).innerHTML = `${perIndxR} ${actIndxR} ${posIndexR} ${timIndexR}`;
  };
};
