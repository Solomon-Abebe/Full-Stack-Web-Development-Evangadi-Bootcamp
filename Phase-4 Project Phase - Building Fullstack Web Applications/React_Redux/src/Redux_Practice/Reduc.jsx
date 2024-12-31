import {compose, pipe} from "lodash/fp"

let input = " JavaScript ";
let outPut = "<div>"+ input.trim()+ "</div>";

const trim = str => str.trim();
const wrapInDiv = str =>`<div> ${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)))

console.log(result);