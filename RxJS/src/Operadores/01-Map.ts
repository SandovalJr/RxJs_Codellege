import { Observer, range, from, fromEvent } from "rxjs";
import { displayLog } from "../utils/utlis";
import { Empleado } from "../interfaces/interfaces";
import { map } from "rxjs/operators";
/*****
OBSERVABLE USANDO TIMER 
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

range(1, 5)
  .pipe(map((valor) => valor * 10))
  .subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$
  .pipe(map<KeyboardEvent, string>((event) => event.code))
  .subscribe(observer);
