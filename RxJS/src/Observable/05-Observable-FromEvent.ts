import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO FROM EVENT
******/

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");
// src1$.subscribe((value) => {
//   console.log(`[click: ] x = ${value.x}  y = ${value.y}`);
// });

src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

src2$.subscribe(({ keyCode }) => {
  console.log(keyCode);
});
