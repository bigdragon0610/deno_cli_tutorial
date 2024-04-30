const response = await fetch("https://clock.bigdragon.tech/");
const content = await response.text();
console.log(content);
