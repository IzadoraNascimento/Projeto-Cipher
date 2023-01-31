import cipher from './cipher.js';

console.log(cipher);

const offset = document.getElementById("Key");
const box1 = document.getElementById("area1");
const crip = document.getElementById("Decode");
const box2 = document.getElementById("area2");
const descrip = document.getElementById("Encode");

crip.addEventListener("click", acaoCode);
descrip.addEventListener("click",acaoDecode);

function acaoCode() {
  box2.value = cipher.encode(parseInt(offset.value), box1.value);
}

function acaoDecode() {
  box2.value = cipher.decode(parseInt(offset.value), box1.value);
}












