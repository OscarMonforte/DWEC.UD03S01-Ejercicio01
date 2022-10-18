/**
 * index.js
 */

import { incrementar, reset } from "./module_contador.js";

const btnInc = document.getElementById("btnInc");
const btnRst = document.getElementById("btnRst");
const count = document.getElementById("count");

btnInc.onclick = () => count.innerHTML = incrementar();

btnRst.onclick = () => count.innerHTML = reset();