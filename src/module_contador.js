/**
 * module_contador.js
 */

let contador = 0;

const incrementar = () => { return ++contador; }
const reset = () => { return contador = 0; }

export {
    incrementar, reset
}