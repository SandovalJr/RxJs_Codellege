import { Observer, fromEvent, of } from "rxjs";
import { displayLog } from "../utils/utlis";
import { tap, first, map, subscribeOn, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: `, value),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

const src$ = of(1, 2, 3, 4, 5, 6);

src$.pipe(takeWhile((numero) => numero < 4));
// .subscribe(observer);
click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150)
  )
  .subscribe(observer);
