import {
  Observer,
  fromEvent,
  of,
  interval,
  pipe,
  from,
  asyncScheduler,
} from "rxjs";
import { displayLog } from "../utils/utlis";
import {
  takeUntil,
  tap,
  skip,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  debounceTime,
  pluck,
  throttleTime,
} from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next], ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent(document, "click");
// click$.pipe(throttleTime(3000)).subscribe(observer)

const input = document.createElement("input");
document.querySelector("#log-container")?.appendChild(input);

const input$ = fromEvent(input, "keyup");
/*****
utilizamos el throttleTime para que cuando haya pasado cierto tiempo 
se guarde el valor final sin necesidad de dar un espacio o presionar cualquier otra tecla
******/
input$
  .pipe(
    throttleTime(5000, asyncScheduler, { leading: true, trailing: true }),
    pluck("target", "value")
  )
  .subscribe(observer);
