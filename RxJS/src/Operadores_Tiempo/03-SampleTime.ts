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
  map,
  sampleTime,
} from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next], ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

/*****
SampleTime
******/

click$.pipe(sampleTime(3000),map(({ x, y }) => ({ x, y })) ).subscribe(observer);
