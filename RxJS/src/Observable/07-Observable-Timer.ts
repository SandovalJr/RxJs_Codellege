import { Observer, timer } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
/*****
OBSERVABLE USANDO TIMER 
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};
const incrementar10seg = new Date();
incrementar10seg.setSeconds(incrementar10seg.getSeconds() + 10);

// const src$ = timer(3000, 1000);
const src$ = timer(incrementar10seg);
src$.subscribe(observer);
