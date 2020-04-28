import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import {tap, first,  map } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: `, value),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

/*****
FIRST
******/
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(() => console.log("tap")),
    first((event) => event.clientX > 150),
    map(({ clientX, clientY }) => ({ clientX, clientY }))
  )
  .subscribe((value) => console.log(value));
