import { Observer, fromEvent, of, interval, pipe, from } from "rxjs";
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
} from "rxjs/operators";


/*****
DEBONCETIME
******/
const observer: Observer<any> = {
  next: (value) => displayLog(`[Next], ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent(document, "click");
//
const input = document.createElement("input");
document.querySelector("#log-container")?.appendChild(input);

const input$ = fromEvent(input, "keyup");
input$.pipe(debounceTime(1000), pluck("target", "value")).subscribe(observer);
