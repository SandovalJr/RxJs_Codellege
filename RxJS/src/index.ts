import {
  Observer,
  fromEvent,
  of,
  interval,
  pipe,
  from,
  asyncScheduler,
} from "rxjs";
import { displayLog } from "./utils/utlis";
import {
  map,
  sampleTime,
  sample,
} from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next], ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");
const interval$ = interval(500);
/*****
Sample
******/

interval$.pipe(sample(click$)).subscribe(observer)